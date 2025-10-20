//param - email,password
export const LOGIN_API = "lms/login";

//param - null
export const GET_CLASS_STANDARD_LIST_API = "lms/master/getclasseslist";

//param - null
export const GET_BOARD_LIST_API = "lms/master/getboardslist";

//param - board
export const POST_SCHOOL_LIST_API = "lms/master/getschoollist";

//param - email, mobile
export const POST_CHECK_STUDENT_RECORD_EXIST_IN_THE_SYSTEM_OR_NOT_API = "lms/checkuserexist";

//param - email
export const POST_FORGET_PASSWORD_API = "lms/forgetpassword";

//param - email, mobile
export const POST_SEND_VERIFICATION_OTP_TO_MOBILE_AND_EMAIL_API = "lms/send_verification_otp";

//param - email, password,fname, lname, dob, profile_pic, 
//gender, address, pincode, standard, board, school_name, school_address
export const POST_REGISTER_NEW_STUDENT_API = "lms/registration";

//param - email, fname, lname, dob,standard, board, academics,
export const POST_NEW_SCREEN_REGISTER_NEW_STUDENT_API = "lms/student_registration";

//param - null
export const POST_DEMO_STUDENT_LOGIN_API = "lms/demologin";

