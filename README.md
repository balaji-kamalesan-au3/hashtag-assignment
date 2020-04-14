
## Hashtag Assignment

The goal is to create a page to browse, search and filter through a database of courses.

Flow of App Creation (In order)


    1 . Data Organisation:
        => Gathered data from NPTEL Website as xlsx form
        => Converted the xlsx for to JSON using online convertor
        => Reorganised the data by diffret category of disciplines 
        (https://github.com/balaji-kamalesan-au3/hashtag-assignment/blob/master/src/Data/get_courses.js)
        => Used this data with redux
    
    2 . SetUp Redux:
        => Supplied the required data for each component using redux
        => This ensures the rerendering of component based on certain events like Search Query or Category Selection
    
    3 . FrontEnd
        => Created necessary layouts like Cards, Radio Buttons for resusability
        => Created methods that will pass required actions to redux actions when query or category is selected,
        then it takes care of re rendering the component
        => Finally organised each modules to complete the Application

Features Implemented

    1 => Query field will update the course when user enter any words in "Course Title" or "Instructor Names" or "Discipline (Category)"
    2 => Updating the cards when seprate category is selected
    3 => When category is selected and search term is entered, the search is limited to that particular category
    4 => Calculated the course timeline such as "Completed" or "On Going" or "Yet to Start" using dates in the course
    5 => Added Small icons to course cards to make it look better

Time Taken

    14 Hours to from the start to end


How to Install and Run the App:

    Setup Node (Version) >= 8.10 and npm (Version) >= 5.6 on your machine
    Clone the Repository from this URL https://github.com/balaji-kamalesan-au3/hashtag-assignment.git
    To clone run the following command
        git clone https://github.com/balaji-kamalesan-au3/hashtag-assignment.git
    Navigate inside the cloned directory
    Run the following commands 
        npm install
        npm run start
    This will start the app for you 
    If you face any problem please reach me through +91 8838159833


Source of Data used  : https://docs.google.com/spreadsheets/d/e/2PACX-1vTDp7Tc1jHmOcE82rml9Fj1wgdERMb8yMMyUMZC6B2I1VOVO8zt-BBbPRhvoTBTuOgN87FCUDasHEZ-/pubhtml?urp=gmail_link

Looking forward to hear from you.

Balaji Kamalesan,
balajikamalesan96@gmail.com
+91 88388159833
