# QA has submitted the following tickets


## Customer Orders Table
### QA Notes
When viewing the Customer Orders table, the times don't always display correctly. They're in 24-hour format when they should be in 12-hour format with AM/PM displayed.

Additionally, time should display in (H)H:MM format, but currently 12:07 displays as 12:7.

### Dev Notes / Response
Root cause:
Minute Formatting:
    The getMinutes method used on the date object does not add leading 0's by default and a method is needed to add a leading 0 to saidi minute string that is missing it.
Hour Formatting:
    The getHours method used on the date object defaults to 24 hour format, and arithmatic would be needed to calculate and switch this to 12 hour formatting.

Solution: A refactor to use toLocaleDateString and toLocalMinuteString to simplify the formatting, make the code more readible, and to fix the initial issue of no leading 0 and 12 hour formatting.

---


## Customer Order Details
### QA Notes
There seems to be an issue with total price sometimes. On some order details, the total price is displaying values after the penny.

### Dev Notes / Response
Root Cause: The issue with values showing up after the penny as well as a missing 0 after certain totals (i.e. $5.1 should be $5.10) is that there was no explicitly set format for the number total

Solution: Use fixed-point notation in order to explicitly set 2 numbers after the decmial to mimic currency

---


## Delete a Customer Order
### QA Notes
I'm currently unable to delete a customer order. Every time I click the "Delete" button from the Customer Orders table, I get a white screen.

### Dev Notes / Response
Root Cause: the onClick callback was not properly in callback form.

Solution: have confirmDelete be called within an anonymous arrow function

---


## Other

## Customer orders are not in ascending order (newest to oldest)
### QA Notes
I can not properly view orders from the newest to the oldest order when the page loads
### Dev Notes / Response
Root Cause: No sorting of date was implemented

Solution: Sort on the orders array was needed

