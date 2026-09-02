window.ACADEMY_UPLOADS = {
  "generatedAt": "2026-09-02T23:02:47.519Z",
  "announcements": [
    {
      "id": "chatgpt-best-practices-2026-08",
      "title": "ChatGPT Best Practices guide",
      "summary": "Learn which intelligence level to use, how to check your usage, and when to use Canva instead of ChatGPT.",
      "badge": "Required reading",
      "published": "03/08/2026",
      "priority": 100,
      "status": "published",
      "destination": {
        "type": "guide",
        "id": "chatgpt-best-practices"
      },
      "linkText": "Open guide",
      "required": true,
      "acknowledgement": "required",
      "estimatedReadTime": "5 mins"
    },
    {
      "id": "academy-update-renthistory-read-only-2026-08",
      "title": "New RentHistory Agent + temporary Google Plugin limits",
      "summary": "The RentHistory Agent is now available. Gmail, Google Calendar and Google Drive Plugins are currently limited to Read access, so prompts that need to send, create, edit, move, delete or share will not complete until write access is restored.",
      "badge": "Academy update",
      "published": "11/08/2026",
      "priority": 80,
      "status": "published",
      "destination": {
        "type": "agent",
        "id": "rent-history-agent"
      },
      "linkText": "View update",
      "required": false,
      "acknowledgement": "none",
      "estimatedReadTime": "1 min",
      "type": "announcement",
      "showAsNew": true,
      "sections": [
        {
          "eyebrow": "New tool",
          "title": "RentHistory Agent is now available",
          "text": "The RentHistory Agent creates branded Vanilla Rentals Rental Increase History PDF reports from a full property address or a Cotality CMA.",
          "points": [
            "Use a full property address for a standalone report.",
            "Upload a Cotality CMA and the agent can identify the subject property.",
            "It can insert the Rental Increase History page into a CMA or process multiple properties in one request."
          ],
          "tone": "new"
        },
        {
          "eyebrow": "Temporary limitation",
          "title": "Gmail, Calendar and Drive are currently Read-only",
          "text": "Plugin permissions are temporarily limited to Read access. ChatGPT can still find, review, summarise and analyse permitted information, but write actions will not complete until access is restored.",
          "points": [
            "Gmail: no sending, replying, archiving, labelling, deleting or other mailbox changes.",
            "Calendar: no creating, editing, moving, accepting, declining or cancelling events.",
            "Drive: no editing, moving, deleting or sharing files.",
            "Drafting and planning prompts still work; complete the final write action manually when needed."
          ],
          "tone": "warning"
        }
      ],
      "actions": [
        {
          "label": "Open RentHistory Agent",
          "href": "/agent/rent-history",
          "style": "gold"
        },
        {
          "label": "Browse Tools & Workflows",
          "href": "/tools",
          "style": "secondary"
        }
      ]
    },
    {
      "id": "chatgpt-usage-analytics-storage-cloud-browser-2026-09",
      "title": "NEW: ChatGPT Usage, Analytics, Storage & Cloud Browser",
      "summary": "Understand the new 5-hour and weekly usage meters, read Analytics, manage saved files before storage fills up, and use Cloud Browser safely.",
      "badge": "NEW · Required reading",
      "published": "03/09/2026",
      "priority": 200,
      "status": "published",
      "destination": {
        "type": "guide",
        "id": "chatgpt-best-practices"
      },
      "linkText": "Read the update",
      "required": true,
      "acknowledgement": "required",
      "estimatedReadTime": "8 mins",
      "showAsNew": true
    }
  ],
  "courses": [],
  "agents": [
    {
      "id": "feature_rent_history_agent",
      "title": "RentHistory Agent",
      "icon": "📈",
      "resourceType": "Agent",
      "summary": "Create branded Vanilla Rentals Rental Increase History PDF reports from a full property address or a Cotality CMA.",
      "why": "The RentHistory Agent turns verified internal rental-history data into a consistent, branded report. Staff provide the property identity; the agent handles the report build without asking staff to calculate, estimate or copy rent figures manually.",
      "use": [
        "Create one Rental Increase History PDF from a full property address",
        "Upload a Cotality CMA and let the agent identify the subject property",
        "Insert a Rental Increase History page into an existing CMA",
        "Process multiple full addresses or CMA PDFs in one request"
      ],
      "avoid": [
        "Do not provide rent figures manually",
        "Do not ask the agent to estimate missing rent",
        "Do not ask it to copy rent data from the CMA",
        "Do not combine different properties into one report",
        "Do not edit the spreadsheet or internal report files",
        "Do not rely on approximate or partial addresses",
        "Do not ask the agent to redesign the report",
        "Do not use the reference report as an input CMA"
      ],
      "methods": [
        {
          "number": "1",
          "title": "Use a property address",
          "short": "Best for a quick report when you know the full property address.",
          "steps": [
            "Start a chat with the RentHistory Agent.",
            "Provide the complete property address, including suburb, state and postcode.",
            "Download the standalone one-page PDF returned by the agent."
          ],
          "prompt": "Create a rental history report for 1/33 Melinda Street, Southport, QLD 4215.",
          "expected": [
            "One standalone, one-page PDF",
            "Rental history matched to the supplied address",
            "Current rent displayed",
            "Rent-growth graph included"
          ]
        },
        {
          "number": "2",
          "title": "Upload a CMA",
          "short": "Best when you already have the Cotality CMA for the property.",
          "steps": [
            "Upload the Cotality CMA PDF to the RentHistory Agent.",
            "No additional message is required.",
            "Download the standalone Rental Increase History PDF."
          ],
          "prompt": "",
          "expected": [
            "The agent extracts the subject property address",
            "A standalone, one-page Rental Increase History PDF is created",
            "The original CMA is not returned by default"
          ]
        },
        {
          "number": "3",
          "title": "Insert the report into a CMA",
          "short": "Use when the finished Rental Increase History page needs to sit inside the CMA.",
          "steps": [
            "Upload the Cotality CMA PDF.",
            "Tell the agent to insert the Rental Increase History page into the CMA.",
            "Download the completed CMA returned by the agent."
          ],
          "prompt": "Insert the Rental Increase History page into this CMA and return the completed CMA.",
          "expected": [
            "The original CMA pages are preserved",
            "The new page is inserted before the final disclaimer page",
            "A completed PDF is returned"
          ]
        },
        {
          "number": "4",
          "title": "Process multiple properties",
          "short": "Use for batches of addresses, CMA PDFs, or a mixture of both.",
          "steps": [
            "Upload multiple CMA PDFs or provide a list of complete property addresses.",
            "Ask the agent to process all supplied properties.",
            "Download the ZIP and review the completion summary."
          ],
          "prompt": "Create reports for these addresses: [FULL ADDRESS 1]; [FULL ADDRESS 2]; [FULL ADDRESS 3].",
          "expected": [
            "A separate PDF for each property",
            "A ZIP file containing all successful reports",
            "A summary of completed and failed items"
          ]
        }
      ],
      "dataRules": [
        "The internal rental-history spreadsheet is the only source of rent data.",
        "The CMA is used only to identify the property address.",
        "Current Rent comes from the latest valid New Rent value.",
        "The graph includes Current Rent at the report creation date.",
        "Missing or blank spreadsheet records are not estimated.",
        "Property matching must be exact after normal address formatting."
      ],
      "outputs": [
        "Vanilla Rentals branding",
        "Property address",
        "Current rent",
        "Initial rent",
        "Total increase",
        "Total growth",
        "Rent-increase history table",
        "Rent-growth graph",
        "Performance summary",
        "Downloadable PDF"
      ],
      "troubleshooting": [
        {
          "title": "No matching property",
          "text": "The agent will still create the standard report with empty records and explain that the address was not found in the rental-history database."
        },
        {
          "title": "Ambiguous CMA address",
          "text": "If a CMA contains multiple possible subject properties, the agent will ask you to confirm the correct address before it proceeds."
        },
        {
          "title": "Spreadsheet problem",
          "text": "If the internal rental-history spreadsheet cannot be opened or read, stop and contact Kristie."
        },
        {
          "title": "Disputed information",
          "text": "If someone believes a report is incorrect, contact Kristie for review. Do not ask the agent to invent or substitute corrected figures."
        }
      ],
      "faq": [
        {
          "q": "Where does the rent information come from?",
          "a": "Only from the internal rental-history spreadsheet. The CMA is not a rent-data source."
        },
        {
          "q": "Do I need to type the rent into the prompt?",
          "a": "No. Do not provide rent figures manually. Give the agent the full property address or the CMA and let it match the internal records."
        },
        {
          "q": "What does Current Rent mean in the report?",
          "a": "Current Rent is the latest valid New Rent value in the internal rental-history spreadsheet."
        },
        {
          "q": "What happens if the address is not in the database?",
          "a": "The agent still creates the standard report with empty records and explains that no matching rental-history record was found."
        },
        {
          "q": "Can I put several properties into one report?",
          "a": "No. Each property receives its own report. Batch requests return separate PDFs, normally together in a ZIP file."
        },
        {
          "q": "What if I think a figure is wrong?",
          "a": "Contact Kristie for review. The agent must not invent a replacement figure or estimate missing information."
        }
      ],
      "prompts": [
        {
          "title": "Single property",
          "text": "Create a rental history report for [FULL PROPERTY ADDRESS]."
        },
        {
          "title": "Address batch",
          "text": "Create reports for these addresses: [FULL ADDRESS LIST]. Return a separate PDF for each property and a summary of any items that could not be completed."
        },
        {
          "title": "Process uploaded CMAs",
          "text": "Process all uploaded CMA PDFs and create a separate Rental Increase History PDF for each subject property."
        },
        {
          "title": "Insert into one CMA",
          "text": "Insert the Rental Increase History page into this CMA and return the completed CMA."
        },
        {
          "title": "Insert into multiple CMAs",
          "text": "Process these CMAs, insert the Rental Increase History page into each CMA before its final disclaimer page, and return the completed CMAs with a completion summary."
        }
      ],
      "slug": "rent-history",
      "status": "published",
      "published": "2026-08-11",
      "showAsNew": true
    }
  ],
  "workflows": [],
  "guides": [
    {
      "id": "chatgpt-best-practices",
      "slug": "chatgpt-best-practices",
      "title": "ChatGPT Best Practices",
      "src": "guides/chatgpt-best-practices/index.html",
      "embedSrc": "guides/chatgpt-best-practices/index.html?embed=1",
      "reviewed": "03/09/2026",
      "interfaceVersion": "ChatGPT Web and Desktop — September 2026",
      "status": "published"
    }
  ]
};
