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
    {
        "title": "Daily Startup",
        "category": "Workflow",
        "description": "Trigger: start of day. Turn Gmail, Calendar and loose follow-ups into a practical daily action plan.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: Daily Startup\n\nTrigger moment:\nIt is the start of the workday and I need to know what deserves my attention first.\n\nUse this when:\nmy Gmail and Calendar are available, I have appointments today, or I feel scattered before the day starts.\n\nDo not use this when:\nI need urgent human judgement, legal advice, or the task requires immediate emergency action.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nMy role, today’s appointments, any known priorities, and any Gmail/Calendar summaries ChatGPT can access.\n\nOutput format:\n1. Today’s priorities\n2. Appointment preparation\n3. Follow-ups due\n4. Emails needing attention\n5. Suggested work blocks\n6. Risks or conflicts\n7. End-of-day checklist\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    },
    {
        "title": "Owner Follow-up",
        "category": "Workflow",
        "description": "Trigger: after an owner call, appraisal, maintenance update or difficult conversation.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: Owner Follow-up\n\nTrigger moment:\nI have spoken with, met, or emailed an owner and need to send a clear follow-up with next steps.\n\nUse this when:\nthere were decisions, promises, questions, objections, maintenance items or future actions discussed.\n\nDo not use this when:\nthe matter is sensitive, legally complex or I have not checked the facts, dates or amounts.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nOwner name, property, discussion notes, promises made, deadline, preferred tone and any attachments or links to mention.\n\nOutput format:\n1. Suggested subject line\n2. Owner follow-up email\n3. Short SMS option\n4. Internal note for PropertyMe/Gmail\n5. Follow-up task checklist\n6. Items I must verify before sending\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    },
    {
        "title": "Calendar Planner",
        "category": "Workflow",
        "description": "Trigger: before a busy day, appraisal run, inspection run or week with many appointments.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: Calendar Planner\n\nTrigger moment:\nMy calendar has multiple appointments and I need a realistic plan for preparation, travel, admin and follow-up.\n\nUse this when:\nI have connected Calendar access or can paste my schedule, and I want help finding gaps or overload.\n\nDo not use this when:\nthe schedule involves private matters that should not be shared, or the route/timing needs live navigation accuracy.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nCalendar events, appointment locations, must-do tasks, office commitments and any travel constraints.\n\nOutput format:\n1. Day overview\n2. Prep needed before each appointment\n3. Gaps suitable for admin/follow-up\n4. Possible conflicts or overload\n5. Suggested order or priority\n6. Follow-up block recommendations\n7. Questions I should answer before finalising the day\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    },
    {
        "title": "Gmail Follow-up Finder",
        "category": "Workflow",
        "description": "Trigger: when you suspect promised replies or owner/tenant follow-ups are slipping through Gmail.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: Gmail Follow-up Finder\n\nTrigger moment:\nI need to find conversations where I promised to come back to someone or where a reply is overdue.\n\nUse this when:\nGmail is connected, or I can paste search results/thread summaries.\n\nDo not use this when:\nI expect AI to send, archive or change emails without human review. It should only identify and summarise.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nRole, date range, keywords if relevant, and the type of follow-up I am looking for: owner, tenant, tradie, maintenance, appraisal, renewal or internal.\n\nOutput format:\n1. Possible overdue follow-ups\n2. Who is waiting\n3. What they are waiting for\n4. Suggested reply or next action\n5. Priority rating\n6. Suggested Gmail search terms if more searching is needed\n7. Items that may already be resolved\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    },
    {
        "title": "Meeting Notes Cleaner",
        "category": "Workflow",
        "description": "Trigger: after Zoom, phone calls, appraisals, staff meetings or owner conversations.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: Meeting Notes Cleaner\n\nTrigger moment:\nI have rough meeting or call notes and need them turned into a clean summary and action list.\n\nUse this when:\nthe notes are messy, informal, voice-transcribed, or contain mixed discussion points and tasks.\n\nDo not use this when:\nthe notes contain sensitive personal information that does not need to be processed, or I have not reviewed the transcript.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nRaw notes/transcript, meeting purpose, attendees, property if relevant, and the audience for the summary.\n\nOutput format:\n1. Clean meeting summary\n2. Decisions made\n3. Action items with owner/person responsible\n4. Follow-up messages needed\n5. Risks or unresolved questions\n6. PropertyMe/Gmail note version\n7. Short version for internal update\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    },
    {
        "title": "Maintenance Summary",
        "category": "Workflow",
        "description": "Trigger: when maintenance emails, tenant notes, tradie updates and owner messages need to become one clear update.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: Maintenance Summary\n\nTrigger moment:\nA maintenance matter has multiple messages or moving parts and I need a clear summary before contacting the owner, tenant or tradie.\n\nUse this when:\nthere are multiple emails, photos, quotes, tenant concerns, tradie comments, access issues or owner approval questions.\n\nDo not use this when:\nthere is an emergency repair or safety concern requiring immediate escalation rather than AI drafting.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nProperty, tenant issue, tradie notes, photos described, quote details, owner instructions and current status.\n\nOutput format:\n1. Plain-English issue summary\n2. Timeline of what has happened\n3. Current blocker\n4. Recommended next action\n5. Owner update draft\n6. Tenant update draft\n7. Tradie instruction draft\n8. Risk/urgency notes\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    },
    {
        "title": "Inspection Follow-up Planner",
        "category": "Workflow",
        "description": "Trigger: after the Inspection Report Agent or inspection review, when follow-up actions need to be organised.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: Inspection Follow-up Planner\n\nTrigger moment:\nI already have inspection notes, an inspection report, or Inspection Report Agent output and need to turn it into follow-up actions.\n\nUse this when:\nthe comments are already prepared, but I need maintenance actions, tenant follow-up, owner summary or PM checklist.\n\nDo not use this when:\nI need AI to write the inspection comments themselves — use the Inspection Report Agent for that instead.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nInspection report summary, flagged maintenance items, tenant issues, owner-sensitive items, property address and urgency notes.\n\nOutput format:\n1. Maintenance actions\n2. Tenant follow-up items\n3. Owner update summary\n4. PM tasks to create\n5. Suggested priority\n6. Items needing photo/evidence check\n7. Short email drafts if needed\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    },
    {
        "title": "QCAT Timeline",
        "category": "Workflow",
        "description": "Trigger: when a dispute, breach, bond or tribunal matter needs a clear chronology.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: QCAT Timeline\n\nTrigger moment:\nI need to organise events, emails, notices, photos and evidence into a clear chronology for a tenancy dispute or tribunal preparation.\n\nUse this when:\nI have dates, documents, emails or notes that need to be put into sequence.\n\nDo not use this when:\nI need legal advice, legal conclusions or a guarantee of tribunal outcome. This should organise facts only.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nProperty, tenant/owner names if appropriate, issue type, key dates, documents, notices, emails and evidence notes.\n\nOutput format:\n1. Chronology table\n2. Evidence list\n3. Missing documents\n4. Risk points to verify\n5. Plain-English case summary\n6. Questions for PM/manager\n7. Draft internal handover note\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    },
    {
        "title": "Rent Review Helper",
        "category": "Workflow",
        "description": "Trigger: before recommending a rent change, lease renewal or owner discussion about market rent.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: Rent Review Helper\n\nTrigger moment:\nI need to prepare a practical rent review recommendation for an owner or internal review.\n\nUse this when:\nthere is current rent, proposed rent, comparable evidence, tenant history or lease renewal timing to consider.\n\nDo not use this when:\nI have not checked current legislation, notice periods, lease dates or market evidence. AI must not invent figures.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nProperty, current rent, proposed rent, lease dates, comparable properties, tenant history, owner preference and any CMA notes.\n\nOutput format:\n1. Rent review summary\n2. Supporting reasons\n3. Risks or sensitivity points\n4. Owner recommendation email\n5. Tenant communication draft if appropriate\n6. Internal checklist\n7. Facts to verify before action\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    },
    {
        "title": "Lease Renewal Prep",
        "category": "Workflow",
        "description": "Trigger: when a lease is approaching expiry and the PM needs a structured renewal plan.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: Lease Renewal Prep\n\nTrigger moment:\nA lease is coming up for renewal and I need to prepare the owner recommendation and follow-up tasks.\n\nUse this when:\nI need to combine lease dates, rent review, tenant history, maintenance issues and owner communication into one plan.\n\nDo not use this when:\nI have not verified the lease expiry, rent increase rules, owner instructions or required forms.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nProperty, lease expiry, current rent, rent recommendation, tenant history, arrears, maintenance concerns and owner preference.\n\nOutput format:\n1. Renewal readiness summary\n2. Owner recommendation\n3. Tenant communication points\n4. Risk checklist\n5. Required tasks\n6. Suggested timeline\n7. Follow-up email draft\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    },
    {
        "title": "Difficult Conversation Prep",
        "category": "Workflow",
        "description": "Trigger: before calling or replying to a frustrated owner, tenant, applicant or tradie.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: Difficult Conversation Prep\n\nTrigger moment:\nI need to respond to a difficult or emotional property management conversation without sounding defensive or robotic.\n\nUse this when:\nsomeone is unhappy, confused, upset, chasing an answer or objecting to a decision.\n\nDo not use this when:\nthe matter is legal, threatening, discriminatory, unsafe or requires manager approval before response.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nWho is involved, what happened, what they want, what Vanilla can/cannot do, desired outcome and tone.\n\nOutput format:\n1. Situation summary\n2. Likely concerns\n3. Calm response strategy\n4. Phone call talking points\n5. Email reply draft\n6. Things not to say\n7. Escalation or verification checklist\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    },
    {
        "title": "Email Refiner",
        "category": "Workflow",
        "description": "Trigger: when a draft email is too long, blunt, unclear or risky before sending.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: Email Refiner\n\nTrigger moment:\nI have drafted an email and need it made clearer, shorter or more professional before I send it.\n\nUse this when:\nthe email involves owners, tenants, trades, applicants, internal staff or sensitive service issues.\n\nDo not use this when:\nI expect AI to decide the facts or send the email for me. I must review and approve the final message.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nDraft email, recipient type, desired tone, key facts that must stay, and anything to avoid.\n\nOutput format:\n1. Improved email\n2. Shorter version\n3. Warmer version if helpful\n4. Direct version if helpful\n5. Subject line\n6. Risky wording removed\n7. Final check before sending\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    },
    {
        "title": "Owner Update Pack",
        "category": "Workflow",
        "description": "Trigger: when an owner needs a clean update covering several property issues at once.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: Owner Update Pack\n\nTrigger moment:\nI need to update an owner on multiple items without overwhelming them or missing next steps.\n\nUse this when:\nthere are several topics such as maintenance, tenant communication, arrears, inspection, lease renewal, rent review or quotes.\n\nDo not use this when:\nthe update requires confirmed figures, legal advice or management approval that I have not checked.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nOwner name, property, topics to cover, current status, decisions needed, dates and preferred tone.\n\nOutput format:\n1. Owner update email\n2. Decision points\n3. Simple status table\n4. Suggested next actions\n5. Short SMS summary\n6. Internal task checklist\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    },
    {
        "title": "SOP Builder",
        "category": "Workflow",
        "description": "Trigger: when a repeated office task needs to become a clear Vanilla procedure.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: SOP Builder\n\nTrigger moment:\nA repeated process needs to become a clear SOP or checklist that another staff member can follow.\n\nUse this when:\nthe process is currently in someone’s head, messy notes, a video transcript or inconsistent steps.\n\nDo not use this when:\nthe process involves policy decisions that management has not approved.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nProcess name, purpose, who does it, trigger, systems used, steps, exceptions and examples.\n\nOutput format:\n1. SOP title\n2. Purpose\n3. Trigger\n4. Roles responsible\n5. Step-by-step process\n6. Exceptions\n7. Quality checklist\n8. Training notes\n9. Questions needing management decision\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    },
    {
        "title": "Prompt Builder",
        "category": "Workflow",
        "description": "Trigger: when a normal prompt keeps producing weak, vague or inconsistent answers.",
        "prompt": "You are assisting a Vanilla Rentals team member.\n\nWorkflow: Prompt Builder\n\nTrigger moment:\nI need to turn a rough request into a stronger prompt before using ChatGPT or V | Assist.\n\nUse this when:\nthe task needs better context, role, audience, tone, output format or constraints.\n\nDo not use this when:\nthe task is too sensitive to outsource, or I do not know the underlying facts yet.\n\nBefore producing the final output:\n1. Ask for any missing details that are essential.\n2. Do not invent facts, dates, names, amounts or legislation.\n3. Keep the wording practical, professional and suitable for property management.\n4. Separate confirmed facts from assumptions or items that need checking.\n\nInformation I will provide:\nRough task, intended audience, desired output, important facts, tone, constraints and examples if available.\n\nOutput format:\n1. Improved prompt\n2. Why the prompt is stronger\n3. Missing context questions\n4. Optional shorter version\n5. Output format suggestion\n6. Review checklist\n\nReview checklist:\n- Is the output clear enough to use at work?\n- Are the next steps obvious?\n- Are any facts, dates, recipients or legal points still needing verification?\n- Is the tone appropriate for Vanilla Rentals?"
    }
]
};
