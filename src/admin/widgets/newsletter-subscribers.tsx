import { useEffect, useState } from "react"
import type { WidgetConfig } from "@medusajs/admin"
import { Button, Table, IconButton } from "@medusajs/ui"
import { Download, Trash } from "@medusajs/icons"

const NewsletterSubscribersWidget = () => {
  const [subscribers, setSubscribers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchSubscribers()
  }, [])

  const fetchSubscribers = async () => {
    try {
      const response = await fetch("/admin/newsletter/subscribers")
      const data = await response.json()
      setSubscribers(data.subscribers)
    } catch (error) {
      console.error("Failed to fetch subscribers:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleExport = async () => {
    try {
      const data = subscribers.map(sub => ({
        Email: sub.email,
        Gender: sub.metadata?.preference || "Not specified",
        "Subscribed At": new Date(sub.metadata?.subscribed_at || sub.created_at).toLocaleDateString()
      }))

      const csv = convertToCSV(data)
      downloadCSV(csv, "newsletter-subscribers.csv")
    } catch (error) {
      console.error("Export failed:", error)
    }
  }

  const convertToCSV = (data) => {
    const headers = Object.keys(data[0])
    const rows = data.map(obj => headers.map(header => obj[header]))
    return [headers, ...rows].map(row => row.join(",")).join("\n")
  }

  const downloadCSV = (csv, filename) => {
    const blob = new Blob([csv], { type: "text/csv" })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = filename
    link.click()
    window.URL.revokeObjectURL(url)
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Newsletter Subscribers</h1>
        <Button
          variant="secondary"
          size="small"
          onClick={handleExport}
          className="flex items-center gap-2"
        >
          <Download size={16} />
          Export CSV
        </Button>
      </div>

      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Gender</Table.HeaderCell>
            <Table.HeaderCell>Subscribed At</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {subscribers.map((subscriber) => (
            <Table.Row key={subscriber.id}>
              <Table.Cell>{subscriber.email}</Table.Cell>
              <Table.Cell>{subscriber.metadata?.preference || "Not specified"}</Table.Cell>
              <Table.Cell>
                {new Date(subscriber.metadata?.subscribed_at || subscriber.created_at).toLocaleDateString()}
              </Table.Cell>
              <Table.Cell>
                <IconButton
                  variant="danger"
                  size="small"
                  onClick={() => handleUnsubscribe(subscriber.email)}
                >
                  <Trash size={16} />
                </IconButton>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export const config: WidgetConfig = {
  zone: "dashboard.customers.list.after",
}

export default NewsletterSubscribersWidget 