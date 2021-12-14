Feature: Create plan
    Scenario: Create New Plan Successfully
        Given I am in Plan Home Page
        When I click Create New Plan
        Then New Plan is created

    Scenario: Update Schedule Setting  Successfully
        Given I am in Schedule Setting Page
        When I input valid time to field
        When I click Save Plan button
        When I click Next Stage button
        Then Schedule Setting is updated

    Scenario: Update DealType Setting  Successfully
        Given I am in Deal Type Setting Page
        When I input Slot
        Then Deal Type Setting is updated