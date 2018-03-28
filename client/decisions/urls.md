# Phase 1

// non-auth

/
/login
/logout


// auth

/account/schools/:schoolCode/programs
/account/schools/:schoolCode/programs/:year
 
/account/programs/:programId 
/account/create-program


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
