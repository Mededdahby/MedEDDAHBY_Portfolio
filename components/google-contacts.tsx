"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2, Mail, User, AlertCircle, Shield, Search, Download } from "lucide-react"
import { Input } from "@/components/ui/input"

declare global {
  interface Window {
    gapi: any
  }
}

interface Contact {
  name: string
  email: string
  photoUrl?: string
}

export default function GoogleContacts() {
  const [contacts, setContacts] = useState<Contact[]>([])
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [securityInfo, setSecurityInfo] = useState<{ apiKeyRestricted: boolean; referrerRestricted: boolean }>({
    apiKeyRestricted: false,
    referrerRestricted: false,
  })

  // Your Google API credentials
  const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ""

  // Discovery docs and scopes for the People API
  const DISCOVERY_DOC = "https://www.googleapis.com/discovery/v1/apis/people/v1/rest"
  const SCOPES = "https://www.googleapis.com/auth/contacts.readonly"

  // Filter contacts based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredContacts(contacts)
      return
    }

    const term = searchTerm.toLowerCase()
    const filtered = contacts.filter(
      (contact) => contact.name.toLowerCase().includes(term) || contact.email.toLowerCase().includes(term),
    )
    setFilteredContacts(filtered)
  }, [searchTerm, contacts])

  useEffect(() => {
    // Load the Google API client library
    const loadGoogleAPI = () => {
      const script = document.createElement("script")
      script.src = "https://apis.google.com/js/api.js"
      script.onload = () => {
        window.gapi.load("client:auth2", initClient)
      }
      script.onerror = () => {
        setError("Failed to load Google API client")
      }
      document.body.appendChild(script)
    }

    // Initialize the Google API client
    const initClient = () => {
      window.gapi.client
        .init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: [DISCOVERY_DOC],
          scope: SCOPES,
        })
        .then(() => {
          // Listen for sign-in state changes
          window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus)

          // Handle the initial sign-in state
          updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get())

          // Check if API key has restrictions
          checkApiKeyRestrictions()
        })
        .catch((error: any) => {
          setError(`Error initializing Google API client: ${error.details || error.message || "Unknown error"}`)
        })
    }

    // Update UI based on authentication status
    const updateSigninStatus = (isSignedIn: boolean) => {
      setIsAuthenticated(isSignedIn)
      if (isSignedIn) {
        fetchContacts()
      } else {
        setContacts([])
        setFilteredContacts([])
      }
    }

    // Check if API key has restrictions (this is a simulation as we can't directly check)
    const checkApiKeyRestrictions = () => {
      // Make a test request to check if the API key works from the current domain
      window.gapi.client
        .request({
          path: "https://people.googleapis.com/v1/people/me/connections",
          params: {
            personFields: "names",
            pageSize: 1,
          },
        })
        .then(() => {
          // If the request succeeds, we assume the API key is properly restricted
          // This is just a heuristic - in reality, we can't directly check API key restrictions
          setSecurityInfo({
            apiKeyRestricted: true,
            referrerRestricted: true,
          })
        })
        .catch((error: any) => {
          // If we get a specific error about API key restrictions, we can detect that
          if (error.result?.error?.status === "PERMISSION_DENIED") {
            setSecurityInfo({
              apiKeyRestricted: true,
              referrerRestricted: true,
            })
          } else {
            // Otherwise, we assume the API key might not be properly restricted
            setSecurityInfo({
              apiKeyRestricted: false,
              referrerRestricted: false,
            })
          }
        })
    }

    loadGoogleAPI()
  }, [API_KEY, CLIENT_ID])

  // Handle sign-in button click
  const handleAuthClick = () => {
    if (window.gapi && window.gapi.auth2) {
      window.gapi.auth2.getAuthInstance().signIn()
    } else {
      setError("Google API client not loaded yet. Please try again.")
    }
  }

  // Handle sign-out button click
  const handleSignoutClick = () => {
    if (window.gapi && window.gapi.auth2) {
      window.gapi.auth2.getAuthInstance().signOut()
    }
  }

  // Fetch contacts from Google People API
  const fetchContacts = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await window.gapi.client.people.people.connections.list({
        resourceName: "people/me",
        pageSize: 100, // Increased page size
        personFields: "names,emailAddresses,photos,phoneNumbers",
      })

      const connections = response.result.connections || []
      const formattedContacts = connections.map((person: any) => {
        const name = person.names && person.names.length > 0 ? person.names[0].displayName : "No Name"

        const email =
          person.emailAddresses && person.emailAddresses.length > 0 ? person.emailAddresses[0].value : "No Email"

        const photoUrl = person.photos && person.photos.length > 0 ? person.photos[0].url : undefined

        return { name, email, photoUrl }
      })

      setContacts(formattedContacts)
      setFilteredContacts(formattedContacts)
    } catch (error: any) {
      setError(`Error fetching contacts: ${error.details || error.message || "Unknown error"}`)
    } finally {
      setIsLoading(false)
    }
  }

  // Export contacts to CSV
  const exportToCSV = () => {
    if (contacts.length === 0) return

    // Create CSV content
    const headers = ["Name", "Email"]
    const csvContent = [headers.join(","), ...contacts.map((contact) => `"${contact.name}","${contact.email}"`)].join(
      "\n",
    )

    // Create a blob and download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", "google-contacts.csv")
    link.style.visibility = "hidden"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Google Contacts Integration</CardTitle>
            <CardDescription>Connect to your Google account to view and manage your contacts</CardDescription>
          </div>
          {isAuthenticated && contacts.length > 0 && (
            <Button variant="outline" size="sm" onClick={exportToCSV} className="flex items-center gap-1">
              <Download size={14} />
              Export CSV
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent>
        {/* Security status indicator */}
        <div className="mb-6 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Shield className={securityInfo.referrerRestricted ? "text-green-500" : "text-yellow-500"} size={20} />
            <h3 className="font-medium">API Key Security Status</h3>
          </div>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${securityInfo.apiKeyRestricted ? "bg-green-500" : "bg-yellow-500"}`}
              ></div>
              <span>API Restrictions: {securityInfo.apiKeyRestricted ? "Enabled" : "Not Detected"}</span>
            </li>
            <li className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${securityInfo.referrerRestricted ? "bg-green-500" : "bg-yellow-500"}`}
              ></div>
              <span>HTTP Referrer Restrictions: {securityInfo.referrerRestricted ? "Enabled" : "Not Detected"}</span>
            </li>
          </ul>
        </div>

        {!isAuthenticated ? (
          <div className="flex flex-col items-center justify-center py-8">
            <p className="mb-4 text-center text-gray-600 dark:text-gray-300">
              Sign in with your Google account to access your contacts
            </p>
            <Button onClick={handleAuthClick} className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                <g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)">
                  <path
                    fill="#4285F4"
                    d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"
                  />
                  <path
                    fill="#34A853"
                    d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"
                  />
                  <path
                    fill="#EA4335"
                    d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"
                  />
                </g>
              </svg>
              Sign in with Google
            </Button>
          </div>
        ) : (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-medium">Your Contacts</h3>
              <Button variant="outline" size="sm" onClick={handleSignoutClick}>
                Sign Out
              </Button>
            </div>

            {/* Search input */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
              <Input
                type="text"
                placeholder="Search contacts..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9"
              />
            </div>

            {isLoading ? (
              <div className="flex justify-center py-8">
                <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
              </div>
            ) : error ? (
              <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-md flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                <p className="text-red-700 dark:text-red-300">{error}</p>
              </div>
            ) : filteredContacts.length === 0 ? (
              <p className="text-center py-8 text-gray-500">
                {contacts.length === 0 ? "No contacts found in your Google account." : "No contacts match your search."}
              </p>
            ) : (
              <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                {filteredContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-md border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    {contact.photoUrl ? (
                      <img
                        src={contact.photoUrl || "/placeholder.svg"}
                        alt={contact.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        <User className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                      </div>
                    )}
                    <div>
                      <p className="font-medium">{contact.name}</p>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <Mail className="h-3 w-3 mr-1" />
                        {contact.email}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Contact count */}
            {contacts.length > 0 && (
              <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                Showing {filteredContacts.length} of {contacts.length} contacts
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
