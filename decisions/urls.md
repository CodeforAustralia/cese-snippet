# Phase 1

// non-auth

/
/login
/logout


// auth

/account/programs
/account/programs?type=mine
/account/programs?type=:schoolCode
/account/new-program
/account/programs/:programId
/account/programs/:programId/edit   // using same page component as /account/programs/:programId 

/account/schools/:schoolCode/programs 
/account/programs/:programId 


## Phase 2

/programs?a=1&b=1
/programs?school=schoolCode
/programs/:programId
/programs/:programId/edit

// htaccess rewrite /programs?school=schoolCode to 
/schools/:schoolName/programs


/topic/emerging
/topic/popular-stamped
/search

/account/stamped
/account/followed


## TBD or future

/register

/invitation-lp   // a landing page that funnels to login for invitees 

/program/new
