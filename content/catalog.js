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
      "id": "feature_projects",
      "title": "Projects",
      "icon": "📁",
      "summary": "Use Projects for ongoing work with repeated files, instructions and chats.",
      "why": "Projects are not for every staff task. They are useful when the work continues over days/weeks or needs files and repeated context.",
      "use": [
        "Training builds",
        "Tribunal matter",
        "Marketing campaign",
        "SOP library",
        "BDM launch project"
      ],
      "avoid": [
        "One quick email",
        "Simple rewrites",
        "Creating a project for everything"
      ],
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
      "title": "Daily Startup",
      "category": "Daily Work",
      "description": "Start the day with a realistic plan, priorities, appointment prep and follow-up scan.",
      "trigger": "I am starting my day and need to know what deserves attention before the inbox takes over.",
      "useWhen": [
        "First thing in the morning",
        "Before a busy inspection/appraisal day",
        "After returning from leave",
        "When I have too many competing priorities"
      ],
      "dontUseWhen": [
        "There is an emergency requiring immediate action",
        "I want AI to send, move, delete or create anything without approval",
        "A legal/compliance decision is required"
      ],
      "requiredInputs": [
        "Role",
        "Calendar context or connected Calendar",
        "Email context or connected Gmail",
        "Known urgent matters",
        "Start/end time constraints"
      ],
      "produces": [
        "Executive snapshot of the day",
        "Priority list grouped by urgency",
        "Appointment preparation plan",
        "Follow-up and promise scan",
        "Suggested order of work",
        "Verification checklist"
      ],
      "prompt": "You are assisting a Vanilla Rentals staff member.\n\nWorkflow: Daily Startup\n\nTrigger moment:\nI am starting my day and need to know what deserves attention before the inbox takes over.\n\nUse when:\n- First thing in the morning\n- Before a busy inspection/appraisal day\n- After returning from leave\n- When I have too many competing priorities\n\nDo not use when:\n- There is an emergency requiring immediate action\n- I want AI to send, move, delete or create anything without approval\n- A legal/compliance decision is required\n\nRequired inputs:\n- Role\n- Calendar context or connected Calendar\n- Email context or connected Gmail\n- Known urgent matters\n- Start/end time constraints\n\nMy context:\n[PASTE NOTES / EMAILS / CALENDAR DETAILS / PROPERTY CONTEXT HERE]\n\nBefore producing the final output:\n1. Check whether the required inputs are present.\n2. If anything important is missing, ask me for it first.\n3. Do not invent facts, dates, approvals, legislation, rent figures, trade advice, or decisions.\n4. Clearly flag anything that requires human verification.\n\nPlease produce:\n1. Executive snapshot of the day\n2. Priority list grouped by urgency\n3. Appointment preparation plan\n4. Follow-up and promise scan\n5. Suggested order of work\n6. Verification checklist\n\nReview checklist:\n- No unsupported assumptions\n- No appointments changed\n- Urgent matters escalated\n- Follow-ups checked manually\n\nImportant:\nUse Australian English. Keep the output practical for Queensland rental property management. Do not provide legal advice."
    },
    {
      "title": "Owner Follow-up",
      "category": "Owner Communication",
      "description": "Turn owner calls, emails and updates into a clear email, SMS, note and task.",
      "trigger": "I need to follow up with an owner after a call, appraisal, maintenance update, rent review or unresolved email.",
      "useWhen": [
        "Owner needs an update",
        "Decision or approval is needed",
        "A call needs documenting",
        "The owner needs reassurance and next steps"
      ],
      "dontUseWhen": [
        "Facts/dates/approvals are not checked",
        "Manager approval is needed first",
        "The matter involves complaint escalation, QCAT, insurance or legal advice"
      ],
      "requiredInputs": [
        "Owner name",
        "Property address",
        "Issue/topic",
        "Current status",
        "Action taken",
        "Decision needed",
        "Desired tone"
      ],
      "produces": [
        "Owner email under 220 words",
        "Short SMS version",
        "PropertyMe/internal note",
        "Follow-up task",
        "Risk wording check",
        "Optional firmer version if appropriate"
      ],
      "prompt": "You are assisting a Vanilla Rentals staff member.\n\nWorkflow: Owner Follow-up\n\nTrigger moment:\nI need to follow up with an owner after a call, appraisal, maintenance update, rent review or unresolved email.\n\nUse when:\n- Owner needs an update\n- Decision or approval is needed\n- A call needs documenting\n- The owner needs reassurance and next steps\n\nDo not use when:\n- Facts/dates/approvals are not checked\n- Manager approval is needed first\n- The matter involves complaint escalation, QCAT, insurance or legal advice\n\nRequired inputs:\n- Owner name\n- Property address\n- Issue/topic\n- Current status\n- Action taken\n- Decision needed\n- Desired tone\n\nMy context:\n[PASTE NOTES / EMAILS / CALENDAR DETAILS / PROPERTY CONTEXT HERE]\n\nBefore producing the final output:\n1. Check whether the required inputs are present.\n2. If anything important is missing, ask me for it first.\n3. Do not invent facts, dates, approvals, legislation, rent figures, trade advice, or decisions.\n4. Clearly flag anything that requires human verification.\n\nPlease produce:\n1. Owner email under 220 words\n2. Short SMS version\n3. PropertyMe/internal note\n4. Follow-up task\n5. Risk wording check\n6. Optional firmer version if appropriate\n\nReview checklist:\n- Facts verified\n- No promises added\n- Next step clear\n- Tone appropriate\n- Decision needed is obvious\n\nImportant:\nUse Australian English. Keep the output practical for Queensland rental property management. Do not provide legal advice."
    },
    {
      "title": "Calendar Planner",
      "category": "Connected Apps",
      "description": "Use Calendar context to plan the day, prepare appointments and find realistic work blocks.",
      "trigger": "My calendar is busy and I need to prepare properly, not just know the appointment times.",
      "useWhen": [
        "Planning today or tomorrow",
        "Weekly planning",
        "Finding focus/admin time",
        "Preparing for appointments or inspection runs"
      ],
      "dontUseWhen": [
        "Travel time is unknown and important",
        "Events need to be moved without approval",
        "The schedule involves details that should not be shared"
      ],
      "requiredInputs": [
        "Calendar details or connected Calendar",
        "Planning goal",
        "Known constraints",
        "Urgent tasks"
      ],
      "produces": [
        "Calendar overview",
        "Pressure-point scan",
        "Appointment prep",
        "Work block plan",
        "Follow-up checklist",
        "Manual verification checklist"
      ],
      "prompt": "You are assisting a Vanilla Rentals staff member.\n\nWorkflow: Calendar Planner\n\nTrigger moment:\nMy calendar is busy and I need to prepare properly, not just know the appointment times.\n\nUse when:\n- Planning today or tomorrow\n- Weekly planning\n- Finding focus/admin time\n- Preparing for appointments or inspection runs\n\nDo not use when:\n- Travel time is unknown and important\n- Events need to be moved without approval\n- The schedule involves details that should not be shared\n\nRequired inputs:\n- Calendar details or connected Calendar\n- Planning goal\n- Known constraints\n- Urgent tasks\n\nMy context:\n[PASTE NOTES / EMAILS / CALENDAR DETAILS / PROPERTY CONTEXT HERE]\n\nBefore producing the final output:\n1. Check whether the required inputs are present.\n2. If anything important is missing, ask me for it first.\n3. Do not invent facts, dates, approvals, legislation, rent figures, trade advice, or decisions.\n4. Clearly flag anything that requires human verification.\n\nPlease produce:\n1. Calendar overview\n2. Pressure-point scan\n3. Appointment prep\n4. Work block plan\n5. Follow-up checklist\n6. Manual verification checklist\n\nReview checklist:\n- No event moved without approval\n- Travel reality checked\n- Conflicts reviewed\n- Prep/follow-up time included\n\nImportant:\nUse Australian English. Keep the output practical for Queensland rental property management. Do not provide legal advice."
    },
    {
      "title": "Gmail Follow-up Finder",
      "category": "Connected Apps",
      "description": "Find overdue replies, promises, waiting-on-others and draft safe replies.",
      "trigger": "I suspect there are owner, tenant, trade or internal emails where I owe a response or follow-up.",
      "useWhen": [
        "Inbox cleanup",
        "After leave",
        "End-of-day follow-up",
        "Owner/maintenance follow-up review"
      ],
      "dontUseWhen": [
        "AI is expected to delete/archive/send without review",
        "The issue needs legal, QCAT, notice or manager judgement"
      ],
      "requiredInputs": [
        "Search scope",
        "Date range",
        "Priority contacts/topics",
        "Role"
      ],
      "produces": [
        "Likely overdue replies",
        "Promises I may have made",
        "Waiting-on-others list",
        "Top 3 suggested replies",
        "Task list",
        "Risk scan"
      ],
      "prompt": "You are assisting a Vanilla Rentals staff member.\n\nWorkflow: Gmail Follow-up Finder\n\nTrigger moment:\nI suspect there are owner, tenant, trade or internal emails where I owe a response or follow-up.\n\nUse when:\n- Inbox cleanup\n- After leave\n- End-of-day follow-up\n- Owner/maintenance follow-up review\n\nDo not use when:\n- AI is expected to delete/archive/send without review\n- The issue needs legal, QCAT, notice or manager judgement\n\nRequired inputs:\n- Search scope\n- Date range\n- Priority contacts/topics\n- Role\n\nMy context:\n[PASTE NOTES / EMAILS / CALENDAR DETAILS / PROPERTY CONTEXT HERE]\n\nBefore producing the final output:\n1. Check whether the required inputs are present.\n2. If anything important is missing, ask me for it first.\n3. Do not invent facts, dates, approvals, legislation, rent figures, trade advice, or decisions.\n4. Clearly flag anything that requires human verification.\n\nPlease produce:\n1. Likely overdue replies\n2. Promises I may have made\n3. Waiting-on-others list\n4. Top 3 suggested replies\n5. Task list\n6. Risk scan\n\nReview checklist:\n- Sender/context checked\n- No automatic sending\n- Urgent items escalated\n- Drafts reviewed\n\nImportant:\nUse Australian English. Keep the output practical for Queensland rental property management. Do not provide legal advice."
    },
    {
      "title": "Maintenance Summary",
      "category": "Maintenance",
      "description": "Turn maintenance requests or messy threads into issue summary, replies, owner approval and trade brief.",
      "trigger": "A maintenance issue has come in or progressed and needs structured action and communication.",
      "useWhen": [
        "Tenant reports maintenance",
        "Owner approval is needed",
        "Trade reply received",
        "Thread is messy"
      ],
      "dontUseWhen": [
        "Emergency requires immediate action",
        "Technical diagnosis is required without trade evidence",
        "Responsibility/liability is being decided"
      ],
      "requiredInputs": [
        "Property",
        "Issue",
        "Location",
        "Tenant/trade/owner notes",
        "Photos/evidence",
        "Approval status"
      ],
      "produces": [
        "Maintenance summary",
        "Missing information checklist",
        "Urgency estimate",
        "Tenant reply",
        "Owner approval request",
        "Trade brief",
        "PropertyMe note",
        "PM checklist"
      ],
      "prompt": "You are assisting a Vanilla Rentals staff member.\n\nWorkflow: Maintenance Summary\n\nTrigger moment:\nA maintenance issue has come in or progressed and needs structured action and communication.\n\nUse when:\n- Tenant reports maintenance\n- Owner approval is needed\n- Trade reply received\n- Thread is messy\n\nDo not use when:\n- Emergency requires immediate action\n- Technical diagnosis is required without trade evidence\n- Responsibility/liability is being decided\n\nRequired inputs:\n- Property\n- Issue\n- Location\n- Tenant/trade/owner notes\n- Photos/evidence\n- Approval status\n\nMy context:\n[PASTE NOTES / EMAILS / CALENDAR DETAILS / PROPERTY CONTEXT HERE]\n\nBefore producing the final output:\n1. Check whether the required inputs are present.\n2. If anything important is missing, ask me for it first.\n3. Do not invent facts, dates, approvals, legislation, rent figures, trade advice, or decisions.\n4. Clearly flag anything that requires human verification.\n\nPlease produce:\n1. Maintenance summary\n2. Missing information checklist\n3. Urgency estimate\n4. Tenant reply\n5. Owner approval request\n6. Trade brief\n7. PropertyMe note\n8. PM checklist\n\nReview checklist:\n- No diagnosis invented\n- Urgency not overstated\n- Approval clear\n- Evidence saved\n\nImportant:\nUse Australian English. Keep the output practical for Queensland rental property management. Do not provide legal advice."
    },
    {
      "title": "Inspection Follow-up Planner",
      "category": "Inspections",
      "description": "Use after Inspection Report Agent to create tenant, owner and PM follow-up actions.",
      "trigger": "The inspection report has been reviewed and I need to convert findings into follow-up actions.",
      "useWhen": [
        "After using Inspection Report Agent",
        "After routine/entry/exit inspection review",
        "When owner/tenant follow-up is required"
      ],
      "dontUseWhen": [
        "The full report still needs to be generated",
        "Photos/notes have not been reviewed",
        "Issue is urgent/safety-related"
      ],
      "requiredInputs": [
        "Inspection type",
        "Property",
        "Inspection summary",
        "Key findings",
        "Maintenance items"
      ],
      "produces": [
        "Tenant follow-up items",
        "Owner summary",
        "Maintenance list",
        "PM task checklist",
        "Wording risk check"
      ],
      "prompt": "You are assisting a Vanilla Rentals staff member.\n\nWorkflow: Inspection Follow-up Planner\n\nTrigger moment:\nThe inspection report has been reviewed and I need to convert findings into follow-up actions.\n\nUse when:\n- After using Inspection Report Agent\n- After routine/entry/exit inspection review\n- When owner/tenant follow-up is required\n\nDo not use when:\n- The full report still needs to be generated\n- Photos/notes have not been reviewed\n- Issue is urgent/safety-related\n\nRequired inputs:\n- Inspection type\n- Property\n- Inspection summary\n- Key findings\n- Maintenance items\n\nMy context:\n[PASTE NOTES / EMAILS / CALENDAR DETAILS / PROPERTY CONTEXT HERE]\n\nBefore producing the final output:\n1. Check whether the required inputs are present.\n2. If anything important is missing, ask me for it first.\n3. Do not invent facts, dates, approvals, legislation, rent figures, trade advice, or decisions.\n4. Clearly flag anything that requires human verification.\n\nPlease produce:\n1. Tenant follow-up items\n2. Owner summary\n3. Maintenance list\n4. PM task checklist\n5. Wording risk check\n\nReview checklist:\n- Does not duplicate Inspection Report Agent\n- Only observed facts used\n- Maintenance separated from housekeeping\n- Unsupported claims removed\n\nImportant:\nUse Australian English. Keep the output practical for Queensland rental property management. Do not provide legal advice."
    },
    {
      "title": "Rent Review Helper",
      "category": "Rent Review",
      "description": "Prepare rent review snapshot, owner recommendation, tenant draft, risks and actions.",
      "trigger": "A lease renewal or rent review is being considered and needs clear communication and action planning.",
      "useWhen": [
        "Lease renewal window",
        "Rent review discussion",
        "Owner recommendation",
        "Tenant explanation after approval"
      ],
      "dontUseWhen": [
        "Comparable evidence not verified",
        "Notice/compliance details unchecked",
        "Owner has not approved the proposed rent"
      ],
      "requiredInputs": [
        "Property/suburb",
        "Current rent",
        "Proposed rent",
        "Lease expiry",
        "Comparable evidence",
        "Tenant history",
        "Owner instructions"
      ],
      "produces": [
        "Rent review snapshot",
        "Owner recommendation email",
        "Tenant communication draft",
        "Risk and sensitivity check",
        "Action checklist",
        "PropertyMe note"
      ],
      "prompt": "You are assisting a Vanilla Rentals staff member.\n\nWorkflow: Rent Review Helper\n\nTrigger moment:\nA lease renewal or rent review is being considered and needs clear communication and action planning.\n\nUse when:\n- Lease renewal window\n- Rent review discussion\n- Owner recommendation\n- Tenant explanation after approval\n\nDo not use when:\n- Comparable evidence not verified\n- Notice/compliance details unchecked\n- Owner has not approved the proposed rent\n\nRequired inputs:\n- Property/suburb\n- Current rent\n- Proposed rent\n- Lease expiry\n- Comparable evidence\n- Tenant history\n- Owner instructions\n\nMy context:\n[PASTE NOTES / EMAILS / CALENDAR DETAILS / PROPERTY CONTEXT HERE]\n\nBefore producing the final output:\n1. Check whether the required inputs are present.\n2. If anything important is missing, ask me for it first.\n3. Do not invent facts, dates, approvals, legislation, rent figures, trade advice, or decisions.\n4. Clearly flag anything that requires human verification.\n\nPlease produce:\n1. Rent review snapshot\n2. Owner recommendation email\n3. Tenant communication draft\n4. Risk and sensitivity check\n5. Action checklist\n6. PropertyMe note\n\nReview checklist:\n- Market evidence checked\n- Dates checked\n- No invented figures\n- Compliance verified separately\n\nImportant:\nUse Australian English. Keep the output practical for Queensland rental property management. Do not provide legal advice."
    },
    {
      "title": "QCAT Timeline",
      "category": "Compliance",
      "description": "Structure dispute facts, chronology, evidence, missing items and risk questions.",
      "trigger": "A tenancy matter is escalating and needs facts, dates, evidence and gaps organised before review.",
      "useWhen": [
        "Dispute may go to QCAT",
        "Evidence review",
        "Timeline building",
        "Before QCAT lead review"
      ],
      "dontUseWhen": [
        "Legal advice is required",
        "Facts/dates/notices are not verified",
        "The matter needs management escalation first"
      ],
      "requiredInputs": [
        "Matter type",
        "Facts/notes",
        "Dates",
        "Evidence list",
        "Notices/forms",
        "Ledger/photos if relevant"
      ],
      "produces": [
        "Chronological timeline table",
        "Evidence checklist",
        "Missing evidence",
        "Risk questions",
        "Plain-English internal summary",
        "Action checklist"
      ],
      "prompt": "You are assisting a Vanilla Rentals staff member.\n\nWorkflow: QCAT Timeline\n\nTrigger moment:\nA tenancy matter is escalating and needs facts, dates, evidence and gaps organised before review.\n\nUse when:\n- Dispute may go to QCAT\n- Evidence review\n- Timeline building\n- Before QCAT lead review\n\nDo not use when:\n- Legal advice is required\n- Facts/dates/notices are not verified\n- The matter needs management escalation first\n\nRequired inputs:\n- Matter type\n- Facts/notes\n- Dates\n- Evidence list\n- Notices/forms\n- Ledger/photos if relevant\n\nMy context:\n[PASTE NOTES / EMAILS / CALENDAR DETAILS / PROPERTY CONTEXT HERE]\n\nBefore producing the final output:\n1. Check whether the required inputs are present.\n2. If anything important is missing, ask me for it first.\n3. Do not invent facts, dates, approvals, legislation, rent figures, trade advice, or decisions.\n4. Clearly flag anything that requires human verification.\n\nPlease produce:\n1. Chronological timeline table\n2. Evidence checklist\n3. Missing evidence\n4. Risk questions\n5. Plain-English internal summary\n6. Action checklist\n\nReview checklist:\n- Every date has source\n- No legal conclusions invented\n- Gaps clearly marked\n- Documents verified\n\nImportant:\nUse Australian English. Keep the output practical for Queensland rental property management. Do not provide legal advice."
    },
    {
      "title": "Email Refiner",
      "category": "Communication",
      "description": "Improve a rough email before sending, with tone, shorter version and risk check.",
      "trigger": "I have drafted an email that may be too long, blunt, emotional, unclear or risky.",
      "useWhen": [
        "Sensitive owner/tenant/trade email",
        "Tone feels wrong",
        "Message too long",
        "Need clarity before sending"
      ],
      "dontUseWhen": [
        "Important facts are missing",
        "Manager approval is needed",
        "Formal legal/compliance wording must be checked"
      ],
      "requiredInputs": [
        "Draft email",
        "Audience",
        "Desired tone",
        "Goal",
        "Facts that must stay unchanged"
      ],
      "produces": [
        "Improved email",
        "Shorter version",
        "Firmer version if appropriate",
        "Tone diagnosis",
        "Risk check",
        "Subject line options"
      ],
      "prompt": "You are assisting a Vanilla Rentals staff member.\n\nWorkflow: Email Refiner\n\nTrigger moment:\nI have drafted an email that may be too long, blunt, emotional, unclear or risky.\n\nUse when:\n- Sensitive owner/tenant/trade email\n- Tone feels wrong\n- Message too long\n- Need clarity before sending\n\nDo not use when:\n- Important facts are missing\n- Manager approval is needed\n- Formal legal/compliance wording must be checked\n\nRequired inputs:\n- Draft email\n- Audience\n- Desired tone\n- Goal\n- Facts that must stay unchanged\n\nMy context:\n[PASTE NOTES / EMAILS / CALENDAR DETAILS / PROPERTY CONTEXT HERE]\n\nBefore producing the final output:\n1. Check whether the required inputs are present.\n2. If anything important is missing, ask me for it first.\n3. Do not invent facts, dates, approvals, legislation, rent figures, trade advice, or decisions.\n4. Clearly flag anything that requires human verification.\n\nPlease produce:\n1. Improved email\n2. Shorter version\n3. Firmer version if appropriate\n4. Tone diagnosis\n5. Risk check\n6. Subject line options\n\nReview checklist:\n- Facts unchanged\n- No promises added\n- Tone suitable\n- Risky wording flagged\n\nImportant:\nUse Australian English. Keep the output practical for Queensland rental property management. Do not provide legal advice."
    },
    {
      "title": "Lease Renewal Prep",
      "category": "Lease Renewals",
      "description": "Organise renewal snapshot, owner recommendation, tenant draft, timeline and risk checklist.",
      "trigger": "A lease is approaching expiry and the renewal/rent review process needs structure.",
      "useWhen": [
        "Lease expiry approaching",
        "Owner decision needed",
        "Rent review considered",
        "Tenant communication required"
      ],
      "dontUseWhen": [
        "Lease/rent dates unverified",
        "Notice requirements unchecked",
        "Owner approval missing",
        "Dispute requires manager review"
      ],
      "requiredInputs": [
        "Property",
        "Tenant",
        "Lease expiry",
        "Current rent",
        "Proposed rent",
        "Tenant history",
        "Owner instructions",
        "Market evidence"
      ],
      "produces": [
        "Renewal snapshot",
        "Owner recommendation email",
        "Tenant draft",
        "Renewal action timeline",
        "PropertyMe note",
        "Risk checklist",
        "Missing information"
      ],
      "prompt": "You are assisting a Vanilla Rentals staff member.\n\nWorkflow: Lease Renewal Prep\n\nTrigger moment:\nA lease is approaching expiry and the renewal/rent review process needs structure.\n\nUse when:\n- Lease expiry approaching\n- Owner decision needed\n- Rent review considered\n- Tenant communication required\n\nDo not use when:\n- Lease/rent dates unverified\n- Notice requirements unchecked\n- Owner approval missing\n- Dispute requires manager review\n\nRequired inputs:\n- Property\n- Tenant\n- Lease expiry\n- Current rent\n- Proposed rent\n- Tenant history\n- Owner instructions\n- Market evidence\n\nMy context:\n[PASTE NOTES / EMAILS / CALENDAR DETAILS / PROPERTY CONTEXT HERE]\n\nBefore producing the final output:\n1. Check whether the required inputs are present.\n2. If anything important is missing, ask me for it first.\n3. Do not invent facts, dates, approvals, legislation, rent figures, trade advice, or decisions.\n4. Clearly flag anything that requires human verification.\n\nPlease produce:\n1. Renewal snapshot\n2. Owner recommendation email\n3. Tenant draft\n4. Renewal action timeline\n5. PropertyMe note\n6. Risk checklist\n7. Missing information\n\nReview checklist:\n- Dates verified\n- Rent facts checked\n- Compliance checked\n- No unsupported claims\n\nImportant:\nUse Australian English. Keep the output practical for Queensland rental property management. Do not provide legal advice."
    },
    {
      "title": "Difficult Conversation Prep",
      "category": "Communication",
      "description": "Prepare for a difficult owner, tenant, applicant, trade or internal conversation.",
      "trigger": "I need to call or reply to someone who may be upset, frustrated, resistant or confused.",
      "useWhen": [
        "Before difficult calls",
        "Before sensitive replies",
        "When tone matters",
        "When talking points are needed"
      ],
      "dontUseWhen": [
        "Manager escalation needed first",
        "Legal/compliance issue unresolved",
        "You are being asked to admit fault or make promises"
      ],
      "requiredInputs": [
        "Situation",
        "Person/audience",
        "Desired outcome",
        "Confirmed facts",
        "Unconfirmed facts",
        "What cannot be promised"
      ],
      "produces": [
        "Neutral situation summary",
        "Conversation goal",
        "Talking points",
        "Likely reactions and responses",
        "Safe phrases",
        "Phrases to avoid",
        "Follow-up email/SMS",
        "Escalation triggers"
      ],
      "prompt": "You are assisting a Vanilla Rentals staff member.\n\nWorkflow: Difficult Conversation Prep\n\nTrigger moment:\nI need to call or reply to someone who may be upset, frustrated, resistant or confused.\n\nUse when:\n- Before difficult calls\n- Before sensitive replies\n- When tone matters\n- When talking points are needed\n\nDo not use when:\n- Manager escalation needed first\n- Legal/compliance issue unresolved\n- You are being asked to admit fault or make promises\n\nRequired inputs:\n- Situation\n- Person/audience\n- Desired outcome\n- Confirmed facts\n- Unconfirmed facts\n- What cannot be promised\n\nMy context:\n[PASTE NOTES / EMAILS / CALENDAR DETAILS / PROPERTY CONTEXT HERE]\n\nBefore producing the final output:\n1. Check whether the required inputs are present.\n2. If anything important is missing, ask me for it first.\n3. Do not invent facts, dates, approvals, legislation, rent figures, trade advice, or decisions.\n4. Clearly flag anything that requires human verification.\n\nPlease produce:\n1. Neutral situation summary\n2. Conversation goal\n3. Talking points\n4. Likely reactions and responses\n5. Safe phrases\n6. Phrases to avoid\n7. Follow-up email/SMS\n8. Escalation triggers\n\nReview checklist:\n- No admissions added\n- No promises added\n- Tone calm\n- Escalation triggers clear\n\nImportant:\nUse Australian English. Keep the output practical for Queensland rental property management. Do not provide legal advice."
    },
    {
      "title": "Owner Update Pack",
      "category": "Owner Communication",
      "description": "Create owner email, SMS, PropertyMe note, task and risk review after an issue/update.",
      "trigger": "An owner needs a concise update after maintenance, inspection, arrears, complaint or tenant issue.",
      "useWhen": [
        "Maintenance progressed",
        "Inspection concern found",
        "Tenant issue needs owner awareness",
        "Owner needs reassurance or decision"
      ],
      "dontUseWhen": [
        "Facts unchecked",
        "Manager approval needed",
        "Legal/compliance advice involved",
        "Complaint escalation required"
      ],
      "requiredInputs": [
        "Issue summary",
        "Property",
        "Current status",
        "Action taken",
        "Decision needed",
        "Next step",
        "Tone"
      ],
      "produces": [
        "Owner email under 220 words",
        "SMS version",
        "PropertyMe note",
        "Follow-up task",
        "Risk review",
        "Subject line options"
      ],
      "prompt": "You are assisting a Vanilla Rentals staff member.\n\nWorkflow: Owner Update Pack\n\nTrigger moment:\nAn owner needs a concise update after maintenance, inspection, arrears, complaint or tenant issue.\n\nUse when:\n- Maintenance progressed\n- Inspection concern found\n- Tenant issue needs owner awareness\n- Owner needs reassurance or decision\n\nDo not use when:\n- Facts unchecked\n- Manager approval needed\n- Legal/compliance advice involved\n- Complaint escalation required\n\nRequired inputs:\n- Issue summary\n- Property\n- Current status\n- Action taken\n- Decision needed\n- Next step\n- Tone\n\nMy context:\n[PASTE NOTES / EMAILS / CALENDAR DETAILS / PROPERTY CONTEXT HERE]\n\nBefore producing the final output:\n1. Check whether the required inputs are present.\n2. If anything important is missing, ask me for it first.\n3. Do not invent facts, dates, approvals, legislation, rent figures, trade advice, or decisions.\n4. Clearly flag anything that requires human verification.\n\nPlease produce:\n1. Owner email under 220 words\n2. SMS version\n3. PropertyMe note\n4. Follow-up task\n5. Risk review\n6. Subject line options\n\nReview checklist:\n- Facts verified\n- Next step clear\n- No blame language\n- No unsupported claims\n\nImportant:\nUse Australian English. Keep the output practical for Queensland rental property management. Do not provide legal advice."
    },
    {
      "title": "SOP Builder",
      "category": "Administration",
      "description": "Turn repeated office processes into SOPs, checklists and training guides.",
      "trigger": "A repeated process needs to become a clear procedure, checklist or training guide.",
      "useWhen": [
        "Process lives in someone’s head",
        "New staff need instructions",
        "Workflow causes confusion",
        "Transcript/notes need structure"
      ],
      "dontUseWhen": [
        "Process owner has not verified steps",
        "AI is being asked to invent policy",
        "Legal/trust/compliance steps are uncertain"
      ],
      "requiredInputs": [
        "Process notes",
        "Process owner",
        "Systems involved",
        "Audience",
        "Exceptions/escalation points"
      ],
      "produces": [
        "SOP title and purpose",
        "Scope",
        "Responsibilities",
        "Step-by-step procedure",
        "Exceptions",
        "Escalation points",
        "Common mistakes",
        "Quality checklist",
        "Questions to confirm"
      ],
      "prompt": "You are assisting a Vanilla Rentals staff member.\n\nWorkflow: SOP Builder\n\nTrigger moment:\nA repeated process needs to become a clear procedure, checklist or training guide.\n\nUse when:\n- Process lives in someone’s head\n- New staff need instructions\n- Workflow causes confusion\n- Transcript/notes need structure\n\nDo not use when:\n- Process owner has not verified steps\n- AI is being asked to invent policy\n- Legal/trust/compliance steps are uncertain\n\nRequired inputs:\n- Process notes\n- Process owner\n- Systems involved\n- Audience\n- Exceptions/escalation points\n\nMy context:\n[PASTE NOTES / EMAILS / CALENDAR DETAILS / PROPERTY CONTEXT HERE]\n\nBefore producing the final output:\n1. Check whether the required inputs are present.\n2. If anything important is missing, ask me for it first.\n3. Do not invent facts, dates, approvals, legislation, rent figures, trade advice, or decisions.\n4. Clearly flag anything that requires human verification.\n\nPlease produce:\n1. SOP title and purpose\n2. Scope\n3. Responsibilities\n4. Step-by-step procedure\n5. Exceptions\n6. Escalation points\n7. Common mistakes\n8. Quality checklist\n9. Questions to confirm\n\nReview checklist:\n- No policy invented\n- Unclear steps marked\n- Process owner review required\n- Systems named correctly\n\nImportant:\nUse Australian English. Keep the output practical for Queensland rental property management. Do not provide legal advice."
    },
    {
      "title": "Prompt Builder",
      "category": "AI Workflow",
      "description": "Build a reusable Vanilla-quality AI workflow prompt for repeated tasks.",
      "trigger": "A staff member repeats the same task often and needs a reliable prompt they can reuse without starting from scratch.",
      "useWhen": [
        "Repeated task",
        "Quality matters",
        "Specific format needed",
        "Staff keep asking AI vaguely",
        "Task can be improved by better structure"
      ],
      "dontUseWhen": [
        "One-off quick question",
        "Main work is human judgement",
        "Facts cannot be supplied",
        "Final legal/compliance/trust decisions required"
      ],
      "requiredInputs": [
        "Repeated task",
        "Role using the prompt",
        "Work situation",
        "Audience/output recipient",
        "Facts usually required",
        "Desired output",
        "Tone",
        "Constraints"
      ],
      "produces": [
        "Final reusable workflow prompt",
        "Required input checklist",
        "Output format",
        "Safety rules",
        "Human review checklist",
        "Short version",
        "Filled Vanilla example",
        "Quality score"
      ],
      "prompt": "You are assisting a Vanilla Rentals staff member.\n\nWorkflow: Prompt Builder\n\nTrigger moment:\nA staff member repeats the same task often and needs a reliable prompt they can reuse without starting from scratch.\n\nUse when:\n- Repeated task\n- Quality matters\n- Specific format needed\n- Staff keep asking AI vaguely\n- Task can be improved by better structure\n\nDo not use when:\n- One-off quick question\n- Main work is human judgement\n- Facts cannot be supplied\n- Final legal/compliance/trust decisions required\n\nRequired inputs:\n- Repeated task\n- Role using the prompt\n- Work situation\n- Audience/output recipient\n- Facts usually required\n- Desired output\n- Tone\n- Constraints\n\nMy context:\n[PASTE NOTES / EMAILS / CALENDAR DETAILS / PROPERTY CONTEXT HERE]\n\nBefore producing the final output:\n1. Check whether the required inputs are present.\n2. If anything important is missing, ask me for it first.\n3. Do not invent facts, dates, approvals, legislation, rent figures, trade advice, or decisions.\n4. Clearly flag anything that requires human verification.\n\nPlease produce:\n1. Final reusable workflow prompt\n2. Required input checklist\n3. Output format\n4. Safety rules\n5. Human review checklist\n6. Short version\n7. Filled Vanilla example\n8. Quality score\n\nReview checklist:\n- Prompt asks questions first if needed\n- Placeholders clear\n- No facts invented\n- Human review included\n- Too-broad workflows split into smaller ones\n\nImportant:\nUse Australian English. Keep the output practical for Queensland rental property management. Do not provide legal advice."
    }
  ]
};
