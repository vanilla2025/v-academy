window.ACADEMY_CATALOG = {
  "paths": [
    {
      "id": "foundations",
      "title": "AI Foundations",
      "category": "Core Learning",
      "icon": "🎓",
      "recommendedFor": [
        "Everyone"
      ],
      "description": "The shared foundation for using AI in daily Vanilla work. Focuses on workflows first, tools second.",
      "certificate": "AI Foundations Certificate",
      "modules": [
        {
          "heading": "WORKFLOW FOUNDATIONS",
          "lessons": [
            "start_day",
            "communicate",
            "documents",
            "answers",
            "vanilla_knowledge",
            "prompting",
            "work_smarter"
          ]
        }
      ],
      "lessons": {
        "start_day": {
          "id": "start_day",
          "title": "Start Your Day",
          "icon": "🌅",
          "time": "15–20 min",
          "tools": [
            "Gmail",
            "Calendar",
            "ChatGPT"
          ],
          "why": "The fastest AI win is preparing the day before the day runs you. This workflow uses Calendar and Gmail to turn appointments, unanswered messages and follow-ups into a clear plan.",
          "when": [
            "First thing in the morning",
            "Before a busy inspection or appraisal day",
            "When you feel behind before the day starts",
            "When returning from leave"
          ],
          "avoid": [
            "Do not let AI decide priorities without your judgement",
            "Do not let AI send messages or move appointments without review"
          ],
          "prompts": [
            {
              "title": "Daily plan",
              "text": "My Gmail and Calendar are connected. Review today's calendar and recent important emails. Give me a practical plan for the day with priorities, preparation items, follow-ups, and anything that could become urgent. Do not send or change anything."
            },
            {
              "title": "Appointment preparation",
              "text": "Review today's appointments. For each one, tell me what I should prepare, what questions to ask, and what follow-up might be needed afterwards."
            },
            {
              "title": "Outstanding promises",
              "text": "Look through recent sent emails and identify any promises, follow-ups or \"I will get back to you\" items that may still need action."
            },
            {
              "title": "Busy day rescue",
              "text": "My day looks busy. Review my calendar and suggest what can be done before appointments, between appointments and after the last appointment."
            }
          ],
          "mission": [
            "Run the Daily plan prompt with your real Calendar/Gmail.",
            "Pick one follow-up or preparation task it finds.",
            "Do that task or create a reminder for it.",
            "Record your confidence."
          ],
          "congrats": "You now have a repeatable morning workflow. This is the habit that turns AI from a novelty into daily leverage."
        },
        "communicate": {
          "id": "communicate",
          "title": "Communicate Professionally",
          "icon": "✉️",
          "time": "20–30 min",
          "tools": [
            "ChatGPT",
            "V | Assist",
            "Gmail"
          ],
          "why": "Most staff first use AI for email, but the value is not just faster wording. The real value is clearer tone, better structure, fewer emotional replies and more consistent professional communication.",
          "when": [
            "Difficult owner or tenant emails",
            "Bad news messages",
            "Follow-up emails",
            "When you know what to say but not how to say it"
          ],
          "avoid": [
            "Do not send AI text without reading it",
            "Do not let AI invent facts, dates, promises or legislation"
          ],
          "prompts": [
            {
              "title": "Tone options",
              "text": "Rewrite this message in three versions: 1) warm and professional, 2) firmer but still polite, 3) short and direct. Keep the facts unchanged and flag anything that needs checking. Message: [PASTE]"
            },
            {
              "title": "Bad news email",
              "text": "Draft a professional email explaining this bad news clearly and calmly. Context: [PASTE]. Include empathy, the reason, next steps and what the recipient can do."
            },
            {
              "title": "De-escalate",
              "text": "This message sounds too defensive. Rewrite it so it is calm, factual and helpful without admitting fault or making promises I cannot keep. Text: [PASTE]"
            },
            {
              "title": "Owner summary",
              "text": "Turn these rough notes into a clear owner update under 180 words. Include what happened, what we are doing, and what happens next. Notes: [PASTE]"
            }
          ],
          "mission": [
            "Choose one real or realistic message.",
            "Ask AI for three tone versions.",
            "Compare them and choose the safest version.",
            "Edit it manually before treating it as final."
          ],
          "congrats": "You can now use AI to improve communication quality, not just make emails faster."
        },
        "documents": {
          "id": "documents",
          "title": "Understand Documents & PDFs",
          "icon": "📄",
          "time": "20–30 min",
          "tools": [
            "Files",
            "ChatGPT",
            "V | Assist"
          ],
          "why": "A major productivity win is asking AI to read documents, extract dates, compare versions and explain dense information in plain English. This is especially useful for reports, leases, forms, applications and tribunal material.",
          "when": [
            "When a document is long or dense",
            "When you need key dates, obligations or missing information",
            "When comparing two versions",
            "When preparing a summary for someone else"
          ],
          "avoid": [
            "Do not upload highly sensitive documents unless approved",
            "Do not rely on AI alone for legal interpretation",
            "Always verify extracted dates and names"
          ],
          "prompts": [
            {
              "title": "Plain English summary",
              "text": "Summarise this document in plain English. Include purpose, key dates, obligations, risks, missing information and questions I should ask. Do not invent anything."
            },
            {
              "title": "Compare two documents",
              "text": "Compare these two documents and tell me what changed. Focus on dates, obligations, names, money, conditions and any risk areas."
            },
            {
              "title": "Extract actions",
              "text": "Read this document and extract every action required. Return a table with action, responsible person, due date, source section and confidence level."
            },
            {
              "title": "Owner-friendly explanation",
              "text": "Explain this document to a rental property owner in simple terms. Keep it professional and avoid legal advice."
            }
          ],
          "mission": [
            "Use a non-sensitive sample document or a document you are allowed to use.",
            "Ask for a plain-English summary.",
            "Ask for actions and dates.",
            "Check at least two items against the original document."
          ],
          "congrats": "You can now use AI as a document-reading assistant while still keeping human verification in control."
        },
        "answers": {
          "id": "answers",
          "title": "Find Better Answers",
          "icon": "🔎",
          "time": "15–25 min",
          "tools": [
            "ChatGPT",
            "Search",
            "Deep Research"
          ],
          "why": "Staff do not need to understand every research mode. They need to know how to get a reliable answer and when to verify it. This lesson teaches normal chat, search and deep research as different levels of effort.",
          "when": [
            "When you need a current answer",
            "When you need context before speaking to an owner",
            "When comparing options or suppliers",
            "When checking legislation or public information"
          ],
          "avoid": [
            "Do not treat AI as the source of truth for legal, financial or compliance decisions",
            "Do not use deep research for tiny questions that a normal search can answer"
          ],
          "prompts": [
            {
              "title": "Quick current check",
              "text": "Find current information about [TOPIC]. Use reliable sources and tell me what needs verification before I rely on it."
            },
            {
              "title": "Suburb prep",
              "text": "Research [SUBURB] from a property investor perspective. Include rental demand, local amenities, tenant profile, recent trends and what an owner would care about."
            },
            {
              "title": "Legislation explainer",
              "text": "Explain the current Queensland rule about [TOPIC] in plain English. Tell me what source I should verify before using this in client communication."
            },
            {
              "title": "Compare options",
              "text": "Compare [OPTION A], [OPTION B] and [OPTION C] for [PURPOSE]. Give pros, cons, cost considerations, risks and your recommendation with assumptions."
            }
          ],
          "mission": [
            "Pick one real question that came up at work.",
            "Ask AI for an answer and verification checklist.",
            "Identify what source you would check before relying on it."
          ],
          "congrats": "You can now choose the right level of research instead of guessing or overusing deep research."
        },
        "vanilla_knowledge": {
          "id": "vanilla_knowledge",
          "title": "Vanilla Knowledge & V | Assist",
          "icon": "🏠",
          "time": "15–20 min",
          "tools": [
            "V | Assist",
            "Custom GPTs"
          ],
          "why": "V | Assist is best treated as Vanilla context, not as the most powerful version of ChatGPT. Use it when the task needs Vanilla tone, property management context, internal process or templates. Use normal ChatGPT when you need connected Gmail/Calendar tools.",
          "when": [
            "Vanilla wording and tone",
            "Internal templates and workflows",
            "Drafting property-management messages",
            "Checking a process or SOP if the knowledge exists"
          ],
          "avoid": [
            "When you need Gmail or Calendar integration",
            "When you need live/current research",
            "When the matter requires legal or management decision-making"
          ],
          "prompts": [
            {
              "title": "Choose the right AI workspace",
              "text": "I need to do this task: [TASK]. Should I use normal ChatGPT, V | Assist, Gmail, Calendar, Deep Research or a Project? Explain why."
            },
            {
              "title": "Vanilla tone rewrite",
              "text": "Rewrite this message in a Vanilla Rentals style: clear, professional, practical and not overdone. Text: [PASTE]"
            },
            {
              "title": "Process checklist",
              "text": "Turn this Vanilla process into a checklist a staff member can follow. Process: [PASTE]"
            },
            {
              "title": "Quality review",
              "text": "Review this draft as if you are checking it before it goes to an owner or tenant. Flag unclear, risky, unsupported or overly strong wording."
            }
          ],
          "mission": [
            "Ask which AI workspace is best for a real task.",
            "Use V | Assist for one Vanilla-specific draft.",
            "Use normal ChatGPT for one connected-app or research task.",
            "Notice the difference."
          ],
          "congrats": "You now know V | Assist is a specialist, not a replacement for every ChatGPT feature."
        },
        "prompting": {
          "id": "prompting",
          "title": "Build Better Prompts",
          "icon": "🧠",
          "time": "20–25 min",
          "tools": [
            "Prompt Builder",
            "ChatGPT"
          ],
          "why": "Prompting is not magic wording. It is giving AI the same context you would give a competent assistant: role, goal, audience, facts, tone, format and constraints.",
          "when": [
            "When the first answer is too vague",
            "When the task matters",
            "When the output needs a specific structure",
            "When you need repeatable quality"
          ],
          "avoid": [
            "Do not spend ten minutes perfecting a prompt for a thirty-second task",
            "Do not hide missing facts with fancy wording"
          ],
          "prompts": [
            {
              "title": "Structured prompt",
              "text": "Act as [ROLE]. I need to [TASK]. Audience: [AUDIENCE]. Context: [FACTS]. Tone: [TONE]. Output format: [FORMAT]. Constraints: [LIMITS]. Ask questions if needed before drafting."
            },
            {
              "title": "Improve my prompt",
              "text": "Improve this prompt so it gives clearer instructions, better context and safer output. Prompt: [PASTE]"
            },
            {
              "title": "Ask questions first",
              "text": "Before drafting, ask me the 5 most important questions you need answered. The task is: [TASK]."
            },
            {
              "title": "Create reusable template",
              "text": "Turn this prompt into a reusable template with placeholders. Prompt: [PASTE]"
            }
          ],
          "mission": [
            "Use the Structured prompt for one real communication task.",
            "Then ask AI to improve your prompt.",
            "Compare the quality of the two outputs."
          ],
          "congrats": "You can now give AI proper instructions instead of hoping it guesses correctly."
        },
        "work_smarter": {
          "id": "work_smarter",
          "title": "Work Smarter Without Feature-Chasing",
          "icon": "⚙️",
          "time": "15–20 min",
          "tools": [
            "Projects",
            "Toolbox",
            "Pins"
          ],
          "why": "Features change. Workflows last. This lesson teaches how to decide when a task should be a quick chat, a reusable tool, a pinned workflow or a Project.",
          "when": [
            "When you repeat the same work",
            "When you need a reusable prompt",
            "When work continues over days or weeks",
            "When you need to organise files and chats"
          ],
          "avoid": [
            "Do not create a Project for every quick email",
            "Do not pin everything or your Toolbox becomes a junk drawer"
          ],
          "prompts": [
            {
              "title": "Workflow decision",
              "text": "I do this task often: [TASK]. Should it be a quick chat, saved prompt, pinned Toolbox item or Project? Give a practical recommendation."
            },
            {
              "title": "Build my toolbox",
              "text": "Based on my role as [ROLE], suggest 8 AI workflows I should keep in my Toolbox and explain why."
            },
            {
              "title": "Project or not",
              "text": "Should this become a ChatGPT Project? Work description: [PASTE]. Explain pros, cons and a simple structure if yes."
            },
            {
              "title": "Turn into workflow",
              "text": "Turn this repeated task into a reusable workflow with trigger, inputs needed, prompt, review checklist and output."
            }
          ],
          "mission": [
            "Pick one task you repeat.",
            "Ask if it should be a quick chat, Toolbox item or Project.",
            "Pin or save only if you would actually reuse it."
          ],
          "congrats": "You can now separate useful AI habits from feature clutter."
        }
      }
    },
    {
      "id": "bdm",
      "title": "Business Development",
      "category": "Role Learning",
      "icon": "📈",
      "recommendedFor": [
        "BDM",
        "Management"
      ],
      "description": "BDM workflows for preparation, owner conversations, follow-up and investor content.",
      "certificate": "Business Development Certificate",
      "modules": [
        {
          "heading": "BUSINESS DEVELOPMENT PLAYBOOKS",
          "lessons": [
            "bdm_morning",
            "bdm_owner_prep",
            "bdm_objections",
            "bdm_followup",
            "bdm_marketing"
          ]
        }
      ],
      "lessons": {
        "bdm_morning": {
          "id": "bdm_morning",
          "title": "BDM Morning Preparation",
          "icon": "🌅",
          "time": "15 min",
          "tools": [
            "Gmail",
            "Calendar"
          ],
          "why": "A BDM should start the day knowing appointments, follow-ups, owner concerns and preparation gaps. AI can build that briefing quickly.",
          "when": [
            "Before leaving for appointments",
            "Before calling owners",
            "When juggling multiple prospects"
          ],
          "avoid": [
            "Do not rely on AI to know private notes not in Gmail/Calendar"
          ],
          "prompts": [
            {
              "title": "BDM daily brief",
              "text": "Review my calendar and recent owner/prospect emails. Build a BDM daily brief with appointments, preparation, hot prospects, follow-ups due, and risks."
            },
            {
              "title": "Owner call list",
              "text": "Find owner/prospect conversations that appear to need a follow-up. Return name, reason, last contact and suggested next action."
            }
          ],
          "mission": [
            "Run a BDM daily brief.",
            "Pick one follow-up it finds.",
            "Draft or complete that follow-up."
          ],
          "congrats": "You can now use AI to start the day like a prepared BDM, not a reactive one."
        },
        "bdm_owner_prep": {
          "id": "bdm_owner_prep",
          "title": "Owner Appointment Preparation",
          "icon": "🏡",
          "time": "20 min",
          "tools": [
            "Gmail",
            "Calendar",
            "Prompt Builder"
          ],
          "why": "Before an owner appointment, AI can help turn scattered notes into questions, risks, objections and next steps.",
          "when": [
            "Before an appraisal",
            "Before a listing presentation",
            "Before calling a warm lead"
          ],
          "avoid": [
            "Do not invent property details or market figures"
          ],
          "prompts": [
            {
              "title": "Appointment prep",
              "text": "I have an owner appointment for [PROPERTY/SUBURB]. Use my calendar context and any relevant emails to prepare a briefing: owner concerns, likely questions, questions I should ask, risks, and follow-up plan."
            },
            {
              "title": "Question builder",
              "text": "Create 12 smart BDM questions for this owner meeting. Group by motivation, timing, property condition, expectations, current pain points and next steps."
            }
          ],
          "mission": [
            "Prepare for one real or realistic owner appointment.",
            "Generate owner questions.",
            "Choose the 5 best questions."
          ],
          "congrats": "You can now prepare for owner meetings with structure and confidence."
        },
        "bdm_objections": {
          "id": "bdm_objections",
          "title": "Objection Handling",
          "icon": "🛡",
          "time": "20 min",
          "tools": [
            "V | Assist",
            "Prompt Builder"
          ],
          "why": "Owners raise fee, vacancy, rent, marketing and trust objections. AI is useful for role-play and safer wording.",
          "when": [
            "When practising before a call",
            "After an owner raises an objection",
            "When preparing scripts"
          ],
          "avoid": [
            "Do not sound scripted or defensive"
          ],
          "prompts": [
            {
              "title": "Role-play objection",
              "text": "Role-play as a property owner who thinks our fee is too high. Ask me one objection at a time. After I answer, rate my response and suggest a stronger version."
            },
            {
              "title": "Objection response",
              "text": "Draft a calm, professional response to this owner objection: [OBJECTION]. Keep it consultative, not pushy. Include a question that moves the conversation forward."
            }
          ],
          "mission": [
            "Run one role-play.",
            "Rewrite one weak answer.",
            "Save the best version for future use."
          ],
          "congrats": "You can now practise difficult BDM conversations before they happen."
        },
        "bdm_followup": {
          "id": "bdm_followup",
          "title": "Appraisal Follow-up",
          "icon": "📧",
          "time": "15 min",
          "tools": [
            "Gmail",
            "V | Assist"
          ],
          "why": "Follow-up is where trust is won or lost. AI can turn rough notes into clear emails, SMS and action plans.",
          "when": [
            "After an appraisal",
            "After a call",
            "When owner says they need time"
          ],
          "avoid": [
            "Do not promise things you have not confirmed"
          ],
          "prompts": [
            {
              "title": "Follow-up package",
              "text": "Turn these appraisal notes into: 1) owner follow-up email, 2) short SMS, 3) CRM note, 4) three-day follow-up plan. Notes: [PASTE]."
            },
            {
              "title": "Warmer follow-up",
              "text": "Rewrite this follow-up so it sounds warm, confident and helpful without being pushy. Text: [PASTE]."
            }
          ],
          "mission": [
            "Use rough appraisal notes.",
            "Generate the follow-up package.",
            "Manually edit the email."
          ],
          "congrats": "You can now turn every appraisal into a clean next-step sequence."
        },
        "bdm_marketing": {
          "id": "bdm_marketing",
          "title": "Investor Education Content",
          "icon": "📣",
          "time": "20 min",
          "tools": [
            "ChatGPT",
            "Deep Research"
          ],
          "why": "BDMs need useful investor content, not generic real estate fluff. AI helps turn common questions into clear posts and explainers.",
          "when": [
            "When creating owner education",
            "Before campaigns",
            "When owners keep asking the same question"
          ],
          "avoid": [
            "Do not publish market claims without checking them"
          ],
          "prompts": [
            {
              "title": "Owner explainer",
              "text": "Create a short owner education post explaining [TOPIC] for Queensland rental property owners. Keep it useful, practical and under 220 words."
            },
            {
              "title": "Content series",
              "text": "Create a 5-part BDM content series for owners in [SUBURB/AREA]. Each post should answer a question owners actually ask."
            }
          ],
          "mission": [
            "Choose one common owner question.",
            "Create a useful explainer.",
            "Check any factual claims before publishing."
          ],
          "congrats": "You can now create investor education that supports trust and lead generation."
        }
      }
    },
    {
      "id": "pm",
      "title": "Property Manager",
      "category": "Role Learning",
      "icon": "🏠",
      "recommendedFor": [
        "Property Manager",
        "Senior PM",
        "Operations"
      ],
      "description": "PM trigger-moment workflows across inbox, maintenance, owners, inspections, renewals and QCAT.",
      "certificate": "Property Manager AI Certificate",
      "modules": [
        {
          "heading": "PROPERTY MANAGER PLAYBOOKS",
          "lessons": [
            "pm_morning",
            "pm_maintenance",
            "pm_owner_update",
            "pm_inspections",
            "pm_renewals",
            "pm_qcat"
          ]
        }
      ],
      "lessons": {
        "pm_morning": {
          "id": "pm_morning",
          "title": "PM Morning Control",
          "icon": "🌅",
          "time": "15 min",
          "tools": [
            "Gmail",
            "Calendar"
          ],
          "why": "PM work becomes messy when the morning starts with random inbox reactions. AI can help identify urgent matters, follow-ups and appointments.",
          "when": [
            "Start of day",
            "After leave",
            "Before a busy inspection day"
          ],
          "avoid": [
            "Do not let AI decide legal/compliance priority"
          ],
          "prompts": [
            {
              "title": "PM morning brief",
              "text": "Review my calendar and unread emails. Build a PM morning brief with urgent tenant/owner matters, maintenance issues, inspections, arrears, promised follow-ups and suggested order of work."
            },
            {
              "title": "Escalation scan",
              "text": "Identify emails that may need urgent escalation today. Explain why and what information is missing."
            }
          ],
          "mission": [
            "Run a PM morning brief.",
            "Select one urgent item.",
            "Draft the first response or action note."
          ],
          "congrats": "You can now use AI to regain control of a PM morning."
        },
        "pm_maintenance": {
          "id": "pm_maintenance",
          "title": "Maintenance Request Workflow",
          "icon": "🔧",
          "time": "20 min",
          "tools": [
            "Gmail",
            "V | Assist"
          ],
          "why": "Maintenance emails often contain emotion, unclear details and missing information. AI can structure the issue and draft safe communications.",
          "when": [
            "New maintenance request",
            "Owner approval needed",
            "Trade follow-up"
          ],
          "avoid": [
            "Do not diagnose technical issues beyond evidence"
          ],
          "prompts": [
            {
              "title": "Maintenance triage",
              "text": "Summarise this maintenance request. Return issue, property, urgency, missing information, tenant questions, owner update and trade brief. Email/thread: [PASTE]"
            },
            {
              "title": "Owner approval",
              "text": "Draft an owner email requesting approval for this maintenance item. Include issue, tenant impact, risk of delay and next step. Context: [PASTE]."
            }
          ],
          "mission": [
            "Use a sample maintenance request.",
            "Generate tenant questions, owner update and trade brief.",
            "Check what is missing."
          ],
          "congrats": "You can now turn maintenance noise into structured action."
        },
        "pm_owner_update": {
          "id": "pm_owner_update",
          "title": "Owner Update",
          "icon": "🏡",
          "time": "15 min",
          "tools": [
            "V | Assist",
            "Gmail"
          ],
          "why": "Owners want clarity. AI helps summarise what happened, what is being done and what comes next without over-explaining.",
          "when": [
            "After maintenance",
            "After tenant issue",
            "After inspection",
            "Before owner asks for an update"
          ],
          "avoid": [
            "Do not blame tenants, trades or the agency unnecessarily"
          ],
          "prompts": [
            {
              "title": "Owner update",
              "text": "Draft a concise owner update from these notes. Include what happened, current status, action taken, owner decision needed if any, and next step. Notes: [PASTE]."
            },
            {
              "title": "Plain English explanation",
              "text": "Explain this PM issue to an owner in plain English without jargon. Context: [PASTE]."
            }
          ],
          "mission": [
            "Create one owner update.",
            "Ask AI to make it shorter.",
            "Check if the next step is clear."
          ],
          "congrats": "You can now create owner updates that reduce confusion and follow-up emails."
        },
        "pm_inspections": {
          "id": "pm_inspections",
          "title": "Inspection Comments & Follow-up",
          "icon": "📸",
          "time": "20 min",
          "tools": [
            "Inspection Agent",
            "V | Assist"
          ],
          "why": "Inspection notes need to become clear tenant actions, owner summaries and internal follow-up.",
          "when": [
            "Routine inspection",
            "Exit inspection",
            "Entry report review"
          ],
          "avoid": [
            "Do not overstate condition beyond evidence"
          ],
          "prompts": [
            {
              "title": "Routine inspection follow-up",
              "text": "Turn these routine inspection notes into tenant action items, owner summary and internal follow-up tasks. Keep the tone professional. Notes: [PASTE]."
            },
            {
              "title": "Exit report wording",
              "text": "Rewrite these exit condition notes so they are factual, neutral and suitable for an exit report. Notes: [PASTE]."
            }
          ],
          "mission": [
            "Use sample inspection notes.",
            "Generate tenant actions and owner summary.",
            "Remove anything unsupported."
          ],
          "congrats": "You can now convert inspection notes into clearer follow-up."
        },
        "pm_renewals": {
          "id": "pm_renewals",
          "title": "Lease Renewal & Rent Review",
          "icon": "📈",
          "time": "20 min",
          "tools": [
            "Gmail",
            "ChatGPT",
            "Rent Clarity"
          ],
          "why": "Rent reviews need careful wording, evidence and timing. AI can prepare communication and action lists but facts must be verified.",
          "when": [
            "Lease renewal window",
            "CMA/rent review",
            "Owner discussion"
          ],
          "avoid": [
            "Do not invent rent evidence or legislation"
          ],
          "prompts": [
            {
              "title": "Renewal action plan",
              "text": "Create a lease renewal action plan from these facts: [PASTE]. Include owner communication, tenant communication, dates to check and risk items."
            },
            {
              "title": "Owner rent review email",
              "text": "Draft an owner email explaining a proposed rent review. Use only these verified facts: [PASTE]. Keep it clear, compliant and under 220 words."
            }
          ],
          "mission": [
            "Use a sample renewal scenario.",
            "Generate action plan and owner email.",
            "Mark facts that must be verified."
          ],
          "congrats": "You can now use AI to organise rent review work without replacing human judgement."
        },
        "pm_qcat": {
          "id": "pm_qcat",
          "title": "QCAT Evidence Preparation",
          "icon": "⚖️",
          "time": "25 min",
          "tools": [
            "QCAT Companion",
            "V | Assist"
          ],
          "why": "Tribunal prep is about chronology, evidence and clarity. AI can organise evidence but cannot replace legal judgement.",
          "when": [
            "When a dispute escalates",
            "Before QCAT filing",
            "Before hearing prep"
          ],
          "avoid": [
            "Do not invent facts, dates or legislation"
          ],
          "prompts": [
            {
              "title": "Timeline builder",
              "text": "Turn these notes into a chronological timeline. Include date, event, evidence source, party involved and gaps. Notes: [PASTE]."
            },
            {
              "title": "Evidence checklist",
              "text": "Review this matter and list evidence we have, evidence missing, risks, and questions to ask before QCAT. Facts: [PASTE]."
            }
          ],
          "mission": [
            "Create a timeline from sample notes.",
            "Identify missing evidence.",
            "Check that every item has a source."
          ],
          "congrats": "You can now use AI to organise QCAT material more clearly and safely."
        }
      }
    },
    {
      "id": "assistant",
      "title": "PM Assistant",
      "category": "Role Learning",
      "icon": "👥",
      "recommendedFor": [
        "Assistant PM",
        "PM Assistant"
      ],
      "description": "Assistant PM workflows for inbox, calls, follow-ups and scheduling.",
      "certificate": "PM Assistant AI Certificate",
      "modules": [
        {
          "heading": "PM ASSISTANT PLAYBOOKS",
          "lessons": [
            "apm_inbox",
            "apm_calls",
            "apm_followups",
            "apm_scheduling"
          ]
        }
      ],
      "lessons": {
        "apm_inbox": {
          "id": "apm_inbox",
          "title": "Assistant Inbox Sorting",
          "icon": "📥",
          "time": "12 min",
          "tools": [
            "Gmail"
          ],
          "why": "Assistant PMs can lose time sorting mixed emails. AI can group, prioritise and identify items needing PM review.",
          "when": [
            "Morning inbox",
            "Shared inbox cleanup",
            "After a busy day"
          ],
          "avoid": [
            "Do not archive/delete without approval"
          ],
          "prompts": [
            {
              "title": "Assistant inbox sorter",
              "text": "Review unread emails and group into Urgent, PM Review, Tenant Reply, Owner Reply, Maintenance, Admin Filing and No Action. Give a suggested action for each."
            },
            {
              "title": "Escalation note",
              "text": "From these emails, identify what should be escalated to the PM and write a short internal note explaining why."
            }
          ],
          "mission": [
            "Run inbox sorter.",
            "Pick one escalation.",
            "Draft the PM note."
          ],
          "congrats": "You can now support PMs by turning inbox clutter into organised work."
        },
        "apm_calls": {
          "id": "apm_calls",
          "title": "Phone Message to Action",
          "icon": "☎️",
          "time": "10 min",
          "tools": [
            "V | Assist"
          ],
          "why": "Phone notes are often messy. AI can turn them into clear records and call-back scripts.",
          "when": [
            "After receiving a call",
            "When a voicemail is vague",
            "Before updating PM"
          ],
          "avoid": [
            "Do not add facts the caller did not provide"
          ],
          "prompts": [
            {
              "title": "Phone note cleaner",
              "text": "Turn this rough phone note into a clear internal note. Include caller, property, issue, urgency, action required and suggested reply. Note: [PASTE]."
            },
            {
              "title": "Call-back script",
              "text": "Write a short call-back script for this situation. Context: [PASTE]."
            }
          ],
          "mission": [
            "Use a sample phone note.",
            "Generate internal note and script."
          ],
          "congrats": "You can now convert messy phone calls into usable action notes."
        },
        "apm_followups": {
          "id": "apm_followups",
          "title": "Chasing Missing Information",
          "icon": "🔁",
          "time": "10 min",
          "tools": [
            "V | Assist",
            "Gmail"
          ],
          "why": "A lot of assistant work is polite chasing. AI helps keep it clear without sounding rude.",
          "when": [
            "Missing documents",
            "Pending invoices/photos",
            "Waiting on tenant or trade"
          ],
          "avoid": [
            "Do not become too firm too early"
          ],
          "prompts": [
            {
              "title": "First follow-up",
              "text": "Draft a polite follow-up asking for [MISSING ITEM]. Context: [PASTE]. Keep it short and clear."
            },
            {
              "title": "Second follow-up",
              "text": "Rewrite this as a firmer second follow-up without sounding rude. Text: [PASTE]."
            }
          ],
          "mission": [
            "Draft first and second follow-up.",
            "Choose the right tone for the scenario."
          ],
          "congrats": "You can now write follow-ups faster and more consistently."
        },
        "apm_scheduling": {
          "id": "apm_scheduling",
          "title": "Scheduling Support",
          "icon": "📅",
          "time": "12 min",
          "tools": [
            "Calendar"
          ],
          "why": "Scheduling is not just picking a time. AI can help build better descriptions, reminders and preparation notes.",
          "when": [
            "Inspection booking",
            "Appointment setup",
            "Reminder planning"
          ],
          "avoid": [
            "Do not create appointments without checking attendees"
          ],
          "prompts": [
            {
              "title": "Calendar description",
              "text": "Draft a calendar description for [APPOINTMENT]. Include purpose, attendees, property, preparation and follow-up notes."
            },
            {
              "title": "Best time block",
              "text": "Review my calendar and suggest available time blocks for [TASK]. Consider travel, prep and follow-up time."
            }
          ],
          "mission": [
            "Create a calendar description for a sample appointment.",
            "Add preparation and follow-up notes."
          ],
          "congrats": "You can now create more useful calendar entries."
        }
      }
    },
    {
      "id": "admin",
      "title": "Administration",
      "category": "Role Learning",
      "icon": "🗂",
      "recommendedFor": [
        "Administration",
        "Operations",
        "Reception"
      ],
      "description": "Admin workflows for reception, minutes, SOPs and reporting.",
      "certificate": "Administration AI Certificate",
      "modules": [
        {
          "heading": "ADMINISTRATION PLAYBOOKS",
          "lessons": [
            "admin_reception",
            "admin_minutes",
            "admin_sop",
            "admin_reporting"
          ]
        }
      ],
      "lessons": {
        "admin_reception": {
          "id": "admin_reception",
          "title": "Reception & Enquiry Triage",
          "icon": "🏢",
          "time": "10 min",
          "tools": [
            "V | Assist"
          ],
          "why": "Reception/admin needs to classify enquiries quickly and route them properly. AI helps structure the first response.",
          "when": [
            "New enquiry",
            "General inbox",
            "Phone message follow-up"
          ],
          "avoid": [
            "Do not give advice beyond role authority"
          ],
          "prompts": [
            {
              "title": "Enquiry triage",
              "text": "Classify these enquiries into owner, tenant, maintenance, leasing, accounts, urgent and general. Suggest next action for each. Enquiries: [PASTE]."
            },
            {
              "title": "Missing details reply",
              "text": "Draft a polite reply asking for the missing details needed to handle this enquiry. Context: [PASTE]."
            }
          ],
          "mission": [
            "Classify sample enquiries.",
            "Draft one missing-details reply."
          ],
          "congrats": "You can now triage enquiries more consistently."
        },
        "admin_minutes": {
          "id": "admin_minutes",
          "title": "Meeting Notes & Minutes",
          "icon": "📝",
          "time": "15 min",
          "tools": [
            "V | Assist"
          ],
          "why": "Admin often turns rough notes into useful records. AI can create minutes, actions and unresolved questions.",
          "when": [
            "After meetings",
            "Training sessions",
            "Management discussions"
          ],
          "avoid": [
            "Do not invent decisions that were not made"
          ],
          "prompts": [
            {
              "title": "Minutes builder",
              "text": "Turn these notes into minutes with attendees, topics, decisions, action items, owners and due dates. Notes: [PASTE]."
            },
            {
              "title": "Action extract",
              "text": "Extract only action items from these notes. Return owner, action, due date and priority."
            }
          ],
          "mission": [
            "Use rough meeting notes.",
            "Generate minutes and actions.",
            "Check decisions are accurate."
          ],
          "congrats": "You can now turn messy meeting notes into useful records."
        },
        "admin_sop": {
          "id": "admin_sop",
          "title": "SOP Drafting & Cleanup",
          "icon": "📘",
          "time": "20 min",
          "tools": [
            "Projects",
            "V | Assist"
          ],
          "why": "SOPs need structure. AI can organise a process, but humans must verify actual steps and policy.",
          "when": [
            "Documenting a process",
            "Cleaning up old instructions",
            "Training new staff"
          ],
          "avoid": [
            "Do not let AI invent company policy"
          ],
          "prompts": [
            {
              "title": "SOP structure",
              "text": "Create an SOP structure for [PROCESS]. Include purpose, scope, responsibilities, steps, exceptions and escalation."
            },
            {
              "title": "SOP cleanup",
              "text": "Improve this SOP for clarity and missing steps. Do not add policy. SOP: [PASTE]."
            }
          ],
          "mission": [
            "Create an SOP structure for one real process.",
            "Review for gaps."
          ],
          "congrats": "You can now use AI to make procedures easier to follow."
        },
        "admin_reporting": {
          "id": "admin_reporting",
          "title": "Simple Management Reporting",
          "icon": "📊",
          "time": "20 min",
          "tools": [
            "Sheets",
            "ChatGPT"
          ],
          "why": "Admin reports should explain what changed, what matters and what needs attention. AI can write commentary, but numbers must be checked.",
          "when": [
            "Weekly reports",
            "Survey summaries",
            "Training stats",
            "Operational updates"
          ],
          "avoid": [
            "Do not let AI make numbers up or hide uncertainty"
          ],
          "prompts": [
            {
              "title": "Report commentary",
              "text": "Turn these figures into a short management commentary. Explain trends, risks and what to watch. Data: [PASTE]."
            },
            {
              "title": "Table insights",
              "text": "Read this table and identify the top 5 insights, anomalies and questions to ask. Data: [PASTE]."
            }
          ],
          "mission": [
            "Use sample figures.",
            "Generate commentary.",
            "Mark which numbers must be verified."
          ],
          "congrats": "You can now turn raw admin data into clearer reporting."
        }
      }
    }
  ],
  "features": [
    {
      "id": "feature_gmail",
      "title": "Gmail",
      "icon": "📧",
      "summary": "Use email context for triage, summaries, follow-up and safer drafting.",
      "why": "Gmail is one of the highest-value integrations because it connects AI to real conversations instead of forcing staff to copy/paste threads.",
      "use": [
        "Morning triage",
        "Unanswered owner emails",
        "Maintenance summaries",
        "Call preparation",
        "End-of-day follow-up"
      ],
      "avoid": [
        "Sending without review",
        "Legal decisions",
        "Mass actions like archive/delete without checking"
      ],
      "prompts": [
        {
          "title": "Morning triage",
          "text": "Review my unread emails from the past 24 hours. Group them into Urgent, Follow-up, Waiting on Others and Information Only. Give me a practical action list."
        },
        {
          "title": "Thread prep",
          "text": "Summarise all emails with [NAME] from the last month. Highlight concerns, promises, missing information and suggested next action."
        },
        {
          "title": "Follow-up finder",
          "text": "Find conversations where I may owe someone a reply or promised to get back to them."
        }
      ]
    },
    {
      "id": "feature_calendar",
      "title": "Calendar",
      "icon": "📅",
      "summary": "Use calendar context to prepare the day, appointments and follow-up blocks.",
      "why": "Calendar turns AI into a daily planning assistant. It helps staff prepare, not just remember meeting times.",
      "use": [
        "Planning the day",
        "Appointment prep",
        "Finding admin blocks",
        "Weekly workload review"
      ],
      "avoid": [
        "Letting AI move meetings without approval",
        "Ignoring travel reality"
      ],
      "prompts": [
        {
          "title": "Plan my day",
          "text": "Review today’s calendar and create a practical work plan with preparation time, follow-up time and likely pressure points."
        },
        {
          "title": "Prepare appointments",
          "text": "For each appointment today, tell me what to prepare, questions to ask and follow-up likely needed."
        },
        {
          "title": "Find focus time",
          "text": "Review tomorrow’s calendar and suggest where I can block one hour for uninterrupted admin work."
        }
      ]
    },
    {
      "id": "feature_connected_apps",
      "title": "Plugins & Connected Apps",
      "icon": "🔗",
      "summary": "Learn how to find an approved Plugin, connect the correct work account, check permissions, use it safely and disconnect it when required.",
      "why": "In the current VORSI ChatGPT workspace, external service connections are managed under Plugins. A Plugin can let ChatGPT work with authorised information from services such as Gmail, Calendar, Drive, Contacts, LinkedIn and GitHub. This can reduce copying and pasting, but access depends on workspace approval and the permissions granted to the individual Plugin.",
      "use": [
        "Open ChatGPT Settings and select Plugins. This is the location staff should look for in the current VORSI workspace.",
        "Choose an approved Plugin, select Connect, sign in to the correct Vanilla work account and review every requested permission before approving it.",
        "After connecting, start a normal chat. Select or invoke the Plugin when the task requires information from that service.",
        "Test the Plugin with a low-risk, read-only request before relying on it for real work.",
        "Return to Settings > Plugins to review or disconnect a connection when it is no longer needed or the wrong account was connected."
      ],
      "avoid": [
        "Do not look for an Apps section in Settings in the current VORSI workspace; use Plugins.",
        "Do not connect personal accounts to the Vanilla workspace or connect Vanilla accounts to an unapproved personal workspace.",
        "Do not assume every Plugin is available. Availability depends on workspace approval, role and the individual service.",
        "Do not approve permissions you do not understand. Stop and ask before granting broad read/write access.",
        "Do not use a Plugin to send, delete, modify or publish anything unless you have reviewed the action and have authority to do it.",
        "Do not paste passwords, API keys, recovery codes or authentication tokens into ChatGPT.",
        "Do not assume Xero or PropertyMe has a supported Plugin. Use them only if an approved integration is made available by Vanilla."
      ],
      "setup": [
        {
          "title": "1. Open Plugins",
          "text": "In ChatGPT, open Settings and select Plugins from the left-hand menu. Do not look for Apps; the current VORSI workspace calls this section Plugins."
        },
        {
          "title": "2. Find the approved Plugin",
          "text": "Browse or search the Plugins directory for the service you need, such as Gmail, Google Calendar, Google Drive or LinkedIn. If it is not listed, stop and ask rather than attempting a workaround."
        },
        {
          "title": "3. Connect the correct account",
          "text": "Select the Plugin, choose Connect, sign in with the correct Vanilla work account and confirm the account name before approving access."
        },
        {
          "title": "4. Review permissions",
          "text": "Read exactly what the Plugin is asking to access. Prefer read/search access unless an approved work task genuinely requires a write action."
        },
        {
          "title": "5. Test it safely",
          "text": "Open a new chat and use a harmless, read-only test request. Confirm the returned information belongs to the correct account before using the Plugin for real work."
        },
        {
          "title": "6. Manage or disconnect",
          "text": "Return to Settings > Plugins to review the connection, reconnect if authorisation expires, or disconnect it when it is no longer required."
        }
      ],
      "apps": [
        {
          "name": "Gmail",
          "status": "Vanilla relevant",
          "examples": "Find recent owner correspondence, summarise a thread, identify unanswered messages and prepare a reply."
        },
        {
          "name": "Google Calendar",
          "status": "Vanilla relevant",
          "examples": "Review today’s appointments, prepare for meetings and identify realistic admin or follow-up blocks."
        },
        {
          "name": "Google Drive",
          "status": "Vanilla relevant",
          "examples": "Locate approved documents, compare files and retrieve internal reference material."
        },
        {
          "name": "Google Contacts",
          "status": "Vanilla relevant",
          "examples": "Find a saved contact or confirm contact details before communicating."
        },
        {
          "name": "LinkedIn",
          "status": "Use when available",
          "examples": "Look up professional profiles and prepare for legitimate business conversations without guessing someone’s background."
        },
        {
          "name": "GitHub",
          "status": "Developer / project use",
          "examples": "Review repositories, locate files and understand code changes for approved Vanilla projects."
        },
        {
          "name": "Xero",
          "status": "Check availability first",
          "examples": "Only use if Vanilla approves a supported app or integration. Do not assume access exists."
        },
        {
          "name": "PropertyMe",
          "status": "No assumed direct connection",
          "examples": "Use only if PropertyMe or Vanilla provides an approved integration. Do not treat V | Assist as a substitute for a native connection."
        }
      ],
      "troubleshooting": [
        "Plugin not listed: confirm it has been approved and enabled for the VORSI workspace. If it is missing, ask Ivan or the workspace administrator.",
        "Wrong account connected: go to Settings > Plugins, disconnect it immediately and reconnect using the correct Vanilla account.",
        "Connection works but returns nothing: confirm the connected account itself has permission to access the requested data.",
        "Authorisation expired: reconnect the Plugin from Settings > Plugins.",
        "ChatGPT does not use the Plugin automatically: explicitly select or invoke the Plugin in the chat before repeating the request.",
        "Still uncertain: stop and ask Ivan or the workspace administrator before granting access."
      ],
      "prompts": [
        {
          "title": "Check my available Plugins",
          "text": "Tell me which Plugins are available in this chat and what each one can do. Do not access any Plugin yet."
        },
        {
          "title": "Gmail connection test",
          "text": "Using Gmail, find my most recent email from [NAME]. Tell me the subject and date only. Do not draft, send, archive or modify anything."
        },
        {
          "title": "Calendar connection test",
          "text": "Using Google Calendar, list my appointments for tomorrow in time order. Do not create, move, accept or cancel any events."
        },
        {
          "title": "Drive connection test",
          "text": "Using Google Drive, find documents with [KEYWORD] in the title. Return the file names and modified dates only. Do not edit or share anything."
        },
        {
          "title": "LinkedIn profile lookup",
          "text": "Using LinkedIn, look up [NAME / COMPANY]. Summarise only the professional information shown in the connected profile and clearly state if the match is uncertain."
        },
        {
          "title": "GitHub repository orientation",
          "text": "Using GitHub, locate the repository called [REPOSITORY]. Summarise its purpose, main folders and most recent visible changes. Do not modify any files."
        }
      ]
    },
    {
      "id": "feature_projects",
      "title": "Projects",
      "icon": "📁",
      "summary": "Use Projects for ongoing work with repeated files, instructions and chats.",
      "why": "Projects are useful when work continues over days or weeks, needs repeated files and instructions, or must be shared between staff. They are not needed for every quick task.",
      "use": [
        "Shared PM and Assistant PM client follow-up",
        "Training builds",
        "Tribunal matter",
        "Marketing campaign",
        "SOP library",
        "BDM launch project"
      ],
      "avoid": [
        "One quick email",
        "Simple rewrites",
        "Creating a Project for every conversation",
        "Starting the follow-up chat outside the shared Project"
      ],
      "teamTip": {
        "title": "Shared Project example: PM meeting follow-up",
        "text": "A Property Manager and Assistant PM can share one Project. After a client meeting, the PM can use voice chat to capture the meeting notes. The Assistant PM can then see the notes and start the follow-up work immediately. For this to work, the Project must be shared with the Assistant PM and the PM must make sure the chat is created or saved inside that specific shared Project."
      },
      "prompts": [
        {
          "title": "Project setup",
          "text": "I am creating a Project for [WORKFLOW]. Suggest a clear name, purpose, file list, project instructions and first 5 chats."
        },
        {
          "title": "Project or chat",
          "text": "Should this task be a normal chat or a Project? Task: [PASTE]. Explain why."
        },
        {
          "title": "Project instructions",
          "text": "Write project instructions for [PURPOSE]. Include tone, assumptions, quality rules and when to ask questions."
        }
      ]
    },
    {
      "id": "feature_deep_research",
      "title": "Deep Research / Search",
      "icon": "🔎",
      "summary": "Use deeper research when current, sourced information matters.",
      "why": "The value is not the button. The value is knowing when a quick answer is enough and when you need sourced research.",
      "use": [
        "Suburb research",
        "Legislation checks",
        "Supplier comparisons",
        "Competitor research"
      ],
      "avoid": [
        "Tiny questions",
        "Anything where you do not need current sources"
      ],
      "prompts": [
        {
          "title": "Suburb research",
          "text": "Research [SUBURB] for a Queensland rental property owner. Include rental demand, amenities, tenant profile, trends and what to verify."
        },
        {
          "title": "Legislation explainer",
          "text": "Explain the current Queensland rule about [TOPIC]. Include source links and what must be verified before client communication."
        }
      ]
    },
    {
      "id": "feature_vassist",
      "title": "V | Assist",
      "icon": "🤖",
      "summary": "Use Vanilla-specific context, tone and workflows — not connected Gmail/Calendar tasks.",
      "why": "V | Assist is a Vanilla-wrapped custom GPT. Treat it as a specialist for Vanilla context and wording. Use normal ChatGPT for connected Gmail/Calendar workflows if the custom GPT cannot access them.",
      "use": [
        "Vanilla tone",
        "Internal process drafting",
        "Template cleanup",
        "Role-specific communication"
      ],
      "avoid": [
        "Gmail/Calendar integration tasks if unavailable",
        "Current research",
        "Final legal judgement"
      ],
      "prompts": [
        {
          "title": "Vanilla rewrite",
          "text": "Rewrite this in Vanilla Rentals tone: professional, clear, practical and not overdone. Text: [PASTE]"
        },
        {
          "title": "Process checklist",
          "text": "Turn this process into a checklist a Vanilla staff member can follow. Process: [PASTE]"
        }
      ]
    },
    {
      "id": "feature_prompt_builder",
      "title": "Prompt Builder",
      "icon": "🧠",
      "summary": "Turn repeated tasks into structured, reusable prompts.",
      "why": "Prompt Builder is useful when the task matters or repeats. It should help staff give AI proper context rather than guessing.",
      "use": [
        "Owner emails",
        "Inspection comments",
        "Meeting summaries",
        "Marketing content"
      ],
      "avoid": [
        "Tiny once-off questions"
      ],
      "prompts": [
        {
          "title": "Prompt template",
          "text": "Act as [ROLE]. Task: [TASK]. Audience: [AUDIENCE]. Context: [FACTS]. Tone: [TONE]. Output: [FORMAT]. Constraints: [LIMITS]. Ask questions if needed."
        },
        {
          "title": "Improve prompt",
          "text": "Improve this prompt so it gives clearer context and safer output: [PASTE]"
        }
      ]
    },
    {
      "id": "feature_long_docs",
      "title": "Long-form Documents",
      "icon": "📄",
      "summary": "Work with longer drafts, reports, SOPs and documents without Canvas.",
      "why": "Canvas is gone, but the workflow remains: improve long documents section by section, ask for outlines, compare versions and export to Docs/Word when needed.",
      "use": [
        "SOPs",
        "CEO reports",
        "Tribunal submissions",
        "Policies",
        "Training content"
      ],
      "avoid": [
        "Tiny messages",
        "Unverified legal documents"
      ],
      "prompts": [
        {
          "title": "Improve section",
          "text": "Improve only this section. Keep the meaning and facts the same. Make it clearer and more structured: [PASTE]"
        },
        {
          "title": "Document audit",
          "text": "Review this document for structure, duplication, missing sections and unclear wording. Do not rewrite yet. Document: [PASTE]"
        }
      ]
    },
    {
      "id": "feature_safety",
      "title": "AI Safety",
      "icon": "🛡",
      "summary": "Use AI freely, but verify facts and protect sensitive information.",
      "why": "The goal is not fear. The goal is professional use: check facts, avoid oversharing and review before sending.",
      "use": [
        "Before sending messages",
        "Before relying on research",
        "Before uploading documents"
      ],
      "avoid": [
        "Passwords, IDs, bank details, unnecessary sensitive documents"
      ],
      "prompts": [
        {
          "title": "Safety check",
          "text": "Review this AI-generated response. Flag unsupported claims, risky wording, privacy issues, missing facts and anything I should verify before using it. Text: [PASTE]"
        }
      ]
    }
  ],
  "tools": [
    {
        "id": "daily-startup",
        "icon": "🌅",
        "title": "Daily Startup",
        "category": "Workflow",
        "summary": "Turn today’s calendar, inbox and outstanding follow-ups into a clear priority plan.",
        "when": [
            "At the start of the workday",
            "When priorities are competing",
            "After time away from the office"
        ],
        "needs": [
            "Today’s appointments",
            "Important unread or unanswered messages",
            "Outstanding tasks and deadlines"
        ],
        "steps": [
            "Paste or summarise the relevant calendar, email and task information.",
            "ChatGPT identifies urgent, important and deferrable work.",
            "Review the proposed order and adjust for business priorities."
        ],
        "prompt": "Help me plan my workday.\n\nMy role: [ROLE]\nToday’s appointments: [PASTE OR SUMMARISE]\nImportant unread or unanswered messages: [PASTE OR SUMMARISE]\nOutstanding tasks and deadlines: [LIST]\nKnown constraints: [MEETINGS, TRAVEL, STAFF AVAILABILITY]\n\nCreate:\n1. My top three priorities.\n2. A practical schedule for the day.\n3. Messages or follow-ups I should send first.\n4. Items that can safely wait.\n5. A short end-of-day checklist.\n\nDo not invent missing facts. Ask questions where the priority cannot be determined."
    },
    {
        "id": "owner-follow-up",
        "icon": "🏠",
        "title": "Owner Follow-up",
        "category": "Workflow",
        "summary": "Draft a clear owner follow-up after a call, inspection, maintenance issue or decision.",
        "when": [
            "After speaking with an owner",
            "When confirming agreed actions",
            "When an owner has not responded"
        ],
        "needs": [
            "Owner name and property",
            "What happened or was discussed",
            "Required decision, action and deadline"
        ],
        "steps": [
            "Provide the facts and desired outcome.",
            "Choose the appropriate tone.",
            "Review dates, commitments and compliance wording before sending."
        ],
        "prompt": "Draft an owner follow-up email.\n\nOwner: [NAME]\nProperty: [ADDRESS]\nContext: [WHAT HAPPENED OR WAS DISCUSSED]\nActions already completed: [LIST]\nDecision or action required from the owner: [DETAILS]\nDeadline: [DATE/TIME]\nTone: professional, clear and calm.\n\nUse a soft heading structure. Lead with the purpose, separate completed actions from required actions, and finish with one clear next step. Do not invent facts or legal requirements."
    },
    {
        "id": "calendar-planner",
        "icon": "🗓️",
        "title": "Calendar Planner",
        "category": "Workflow",
        "summary": "Build a realistic schedule around appointments, travel time, deadlines and focused work.",
        "when": [
            "Planning a busy day or week",
            "Coordinating inspections or meetings",
            "Protecting time for project work"
        ],
        "needs": [
            "Fixed appointments",
            "Task durations and deadlines",
            "Travel or availability constraints"
        ],
        "steps": [
            "List fixed commitments first.",
            "Add flexible tasks and estimated durations.",
            "Review the proposed schedule for unrealistic transitions."
        ],
        "prompt": "Create a realistic calendar plan.\n\nPlanning period: [DATE OR WEEK]\nFixed appointments: [LIST WITH TIMES AND LOCATIONS]\nFlexible tasks: [TASK + ESTIMATED DURATION + DEADLINE]\nTravel requirements: [DETAILS]\nWorking hours and breaks: [DETAILS]\nPriorities: [LIST]\n\nProduce a chronological schedule with buffer time, travel time and a short contingency block. Flag clashes or anything that cannot realistically fit."
    },
    {
        "id": "gmail-follow-up-finder",
        "icon": "📨",
        "title": "Gmail Follow-up Finder",
        "category": "Workflow",
        "summary": "Identify conversations that need a reply, chase-up or recorded next action.",
        "when": [
            "Clearing the inbox",
            "Preparing for leave",
            "Checking whether commitments were completed"
        ],
        "needs": [
            "Relevant email thread summaries or Gmail access",
            "The review period",
            "Any priority people or properties"
        ],
        "steps": [
            "Define the period and priorities.",
            "Review threads for unanswered questions or promised actions.",
            "Confirm each proposed follow-up before sending."
        ],
        "prompt": "Review the following email threads and identify follow-ups.\n\nReview period: [DATES]\nPriority people/properties: [LIST]\nThreads or summaries: [PASTE]\n\nReturn a table with: person, subject/property, last meaningful action, what is still outstanding, recommended next step, urgency and suggested follow-up wording. Separate genuine follow-ups from threads that require no action. Do not assume a task was completed unless the thread confirms it."
    },
    {
        "id": "meeting-notes-cleaner",
        "icon": "📝",
        "title": "Meeting Notes Cleaner",
        "category": "Workflow",
        "summary": "Turn rough meeting notes into decisions, actions, owners and deadlines.",
        "when": [
            "After meetings or catch-ups",
            "After whiteboard discussions",
            "When notes are fragmented"
        ],
        "needs": [
            "Raw notes or transcript",
            "Attendee names and roles",
            "Known deadlines"
        ],
        "steps": [
            "Paste the raw notes without over-editing.",
            "ChatGPT separates facts, decisions and actions.",
            "Verify owners and dates before circulation."
        ],
        "prompt": "Clean and structure these meeting notes.\n\nMeeting: [TITLE]\nDate: [DATE]\nAttendees: [NAMES]\nRaw notes: [PASTE]\n\nProduce:\n- Purpose and key context\n- Decisions made\n- Action register with owner and deadline\n- Open questions\n- Risks or dependencies\n- A concise follow-up email\n\nDo not convert suggestions into decisions. Mark any unclear owner or deadline as ‘To confirm’."
    },
    {
        "id": "maintenance-summary",
        "icon": "🔧",
        "title": "Maintenance Summary",
        "category": "Workflow",
        "summary": "Summarise a maintenance matter for the owner, tenant or internal handover.",
        "when": [
            "After receiving multiple updates",
            "Before requesting an owner decision",
            "When handing a matter to another staff member"
        ],
        "needs": [
            "Property and issue",
            "Chronological updates",
            "Quotes, costs and current status"
        ],
        "steps": [
            "Provide updates in date order where possible.",
            "Select the intended audience.",
            "Check that costs and approvals match the evidence."
        ],
        "prompt": "Prepare a maintenance summary.\n\nAudience: [OWNER / TENANT / INTERNAL]\nProperty: [ADDRESS]\nIssue: [DESCRIPTION]\nTimeline and communications: [PASTE]\nQuotes or costs: [DETAILS]\nCurrent status: [DETAILS]\nDecision or next action required: [DETAILS]\n\nWrite a concise factual summary with soft headings: Issue, Actions Taken, Current Position, Costs/Quotes, Decision or Next Step. Keep legal or technical claims limited to the supplied evidence."
    },
    {
        "id": "inspection-comments",
        "icon": "📷",
        "title": "Inspection Comments",
        "category": "Workflow",
        "summary": "Convert inspection observations into consistent, neutral and useful property comments.",
        "when": [
            "Drafting routine, entry or exit comments",
            "Standardising wording across rooms",
            "Removing emotional or unclear language"
        ],
        "needs": [
            "Inspection type",
            "Room or area",
            "Observed condition and photo references"
        ],
        "steps": [
            "Provide observations only.",
            "Specify the inspection type and preferred style.",
            "Verify that the final wording matches the photographs."
        ],
        "prompt": "Rewrite these inspection observations into clear, neutral property comments.\n\nInspection type: [ENTRY / ROUTINE / EXIT]\nRoom or area: [AREA]\nObserved condition: [PASTE]\nPhoto references: [IDS IF AVAILABLE]\nRequired action, if any: [DETAILS]\n\nUse concise factual wording. Do not infer causes, responsibility, age or damage beyond the evidence. Keep each observation separate and preserve photo references."
    },
    {
        "id": "qcat-timeline",
        "icon": "⚖️",
        "title": "QCAT Timeline",
        "category": "Workflow",
        "summary": "Organise case evidence into a chronological, tribunal-ready timeline without inventing facts.",
        "when": [
            "Preparing for QCAT or conciliation",
            "Reviewing a dispute history",
            "Checking gaps in evidence"
        ],
        "needs": [
            "Dated emails, notices, notes and documents",
            "Parties and property details",
            "Known claim or issue"
        ],
        "steps": [
            "Provide evidence with dates and sources.",
            "ChatGPT orders events and identifies gaps.",
            "Verify every event against the source documents."
        ],
        "prompt": "Create an evidence-based case timeline.\n\nMatter: [CASE OR ISSUE]\nProperty: [ADDRESS]\nParties: [NAMES/ROLES]\nEvidence and dated events: [PASTE]\n\nReturn a chronological table with date, event, source/evidence, significance and any gap or inconsistency. Then provide a neutral case summary, unresolved issues and a list of documents still needed. Do not provide legal conclusions or invent dates, service, conversations or outcomes."
    },
    {
        "id": "rent-review-helper",
        "icon": "📊",
        "title": "Rent Review Helper",
        "category": "Workflow",
        "summary": "Structure rent-review evidence and turn it into a clear recommendation for review.",
        "when": [
            "Preparing a rent review",
            "Comparing market evidence",
            "Drafting an owner recommendation"
        ],
        "needs": [
            "Current rent and lease dates",
            "Comparable properties and dates",
            "Property differences and constraints"
        ],
        "steps": [
            "Provide current tenancy facts and comparable evidence.",
            "Separate evidence from judgement.",
            "Review the recommendation against current legislation and company process."
        ],
        "prompt": "Help structure a rent review recommendation.\n\nProperty: [ADDRESS]\nCurrent weekly rent: [AMOUNT]\nLease and last increase dates: [DATES]\nProperty features/condition: [DETAILS]\nComparable evidence: [PASTE]\nKnown constraints or risks: [DETAILS]\n\nSummarise the evidence, note material differences between comparables, provide a cautious recommended range and draft an owner briefing. Clearly label assumptions and do not state that a rent increase is legally available unless the supplied dates and current rules have been verified."
    },
    {
        "id": "email-refiner",
        "icon": "✉️",
        "title": "Email Refiner",
        "category": "Workflow",
        "summary": "Improve an existing email while preserving the facts, intent and appropriate tone.",
        "when": [
            "An email is too long or unclear",
            "The tone needs adjustment",
            "You need a stronger call to action"
        ],
        "needs": [
            "The original draft",
            "Recipient and purpose",
            "Any wording that must remain"
        ],
        "steps": [
            "Paste the full draft.",
            "Specify the recipient, purpose and tone.",
            "Check that no commitments or facts were changed."
        ],
        "prompt": "Refine this email without changing the facts.\n\nRecipient: [WHO]\nPurpose: [OUTCOME]\nPreferred tone: [NEUTRAL / WARM / FIRM / CONCISE]\nMust retain: [DETAILS]\nDraft: [PASTE]\n\nUse soft headings only where they improve scanning. Remove repetition, make the requested action explicit and preserve all dates, amounts and commitments. Flag any unclear or potentially risky wording separately."
    },
    {
        "id": "sop-builder",
        "icon": "📋",
        "title": "SOP Builder",
        "category": "Workflow",
        "summary": "Turn an observed process into a practical SOP with roles, steps, controls and exceptions.",
        "when": [
            "Documenting a repeatable process",
            "Preparing onboarding material",
            "Standardising inconsistent work"
        ],
        "needs": [
            "Process purpose and trigger",
            "Actual steps and systems",
            "Roles, exceptions and quality checks"
        ],
        "steps": [
            "Describe the process as it actually happens.",
            "Identify decisions, hand-offs and exceptions.",
            "Validate the draft with the people who perform the work."
        ],
        "prompt": "Build a practical SOP from the information below.\n\nProcess: [NAME]\nPurpose: [WHY IT EXISTS]\nTrigger: [WHAT STARTS IT]\nPeople/roles involved: [LIST]\nSystems or documents used: [LIST]\nActual steps: [PASTE]\nExceptions or common problems: [DETAILS]\nRequired checks/approvals: [DETAILS]\n\nCreate: scope, responsibilities, numbered procedure, decision points, exceptions, quality controls, records created and escalation path. Mark missing information as ‘To confirm’ rather than inventing it."
    },
    {
        "id": "prompt-builder",
        "icon": "🧠",
        "title": "Prompt Builder",
        "category": "Workflow",
        "summary": "Turn a repeated task into a reliable prompt with inputs, rules, output format and checks.",
        "when": [
            "A task is repeated often",
            "ChatGPT outputs keep drifting",
            "You need a prompt other staff can reuse"
        ],
        "needs": [
            "Task objective",
            "Required inputs and rules",
            "Example of a good output"
        ],
        "steps": [
            "Describe the task and failure points.",
            "Define mandatory inputs and output structure.",
            "Test the prompt on at least two different examples."
        ],
        "prompt": "Design a reusable prompt for this task.\n\nTask: [DESCRIPTION]\nUser and audience: [WHO]\nRequired inputs: [LIST]\nRules that must always be followed: [LIST]\nThings it must never invent or change: [LIST]\nRequired output structure: [DETAILS]\nExample of a good result: [PASTE OR DESCRIBE]\nCommon failure points: [LIST]\n\nProduce a copy-ready prompt with: role, objective, input checklist, step-by-step method, validation rules, output format, clarification behaviour and a final quality check. Keep it practical rather than bloated."
    }
]
};
