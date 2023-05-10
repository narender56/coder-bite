# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### Ticket 1: Create a new table and put the unique indexes for each Agent and Facility in it.

    #### Description:
       * To enable Facilities to save their own custom_IDs for each Agent they work with, a new table(`CustomIds`) has to be added.

    #### Acceptance Criteria:
        * A new table in the database called "CustomIds" must be added.
        * There are 3 fields in this table: `agent_id, facility_id, and custom_id`.
        * Create a unique compound index as primary key for `agent_id` and `facility_id` combination
        * Create a unique compound index for `facility_id` and `custom_id` combination

    #### Effort Estimate: 0.5 Days


### Ticket 2: Modify the `getShiftsByFacility` function to include custom ids in the returned data for each Shift - (Blocker - Ticket 1)

    #### Description:
        * The 'getShiftsByFacility' function needs to be changed so that it looks for custom ids (if any) for each Agent and Facility in the given information for each Shift.
        * Use Join with new table (`CustomIds`) while looking up the data

    #### Acceptance Criteria:
        * The custom ids are included in a new field called `custom_id` in the data.
        * If no custom id has been set for an Agent, the "custom_id" field is left blank(`null`).

    #### Effort Estimate: 0.5 Days

### Ticket 3: Change the 'generateReport' function so that the report uses custom ids (Blocker - Ticket 2)

    #### Description:
        * The `generateReport` function has to be changed to use the custom ids (if any) for each Agent in the report rather than the internal id.

    #### Acceptance Criteria:
        * Use custom id(if any) in place of internal id while generating the report

    #### Effort Estimate: 1 hour

### Ticket 4: Update UI to allow Facilities to set `custom ids` for their Agents - (Blocker - Ticket 5)

    #### Description:
        * We must enable Facilities to assign custom IDs to their Agents via the UI..
        * To enter a custom ID in the `Agent View` for `Facilities` add a new textbox.

    #### Acceptance Criteria:
        * A new textbox will be added to the Agent View
        * Once saved, an API call made to save the custom id
        * Once the data saved, show confirmation toast
        * Should be aligned with UX designs

    #### Effort Estimate: 1 Day

### Ticket 5: Create an API to save the custom id in the new table(`CustomIds`) - (Blocker - Ticket 1)

    #### Description:
        * We need to create a new API to accept `CustomId` for each Agent in Facility
        * Create a POST API with payload { `agent_id`, `facility_id`, `custom_id` }
        * Save the data in new table(`CustomIds`)

    #### Acceptance Criteria:
        * Create a POST endpoint to send the data from UI with Payload { `agent_id`, `facility_id`, `custom_id` }
        * Following status codes should be implemented
            * 200 for success
            * 400 for bad data

    #### Effort Estimate: 1 Day