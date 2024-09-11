
export const validateData =(email , password )=>{

    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    // const isFullName = /^[a-zA-Z]{4,}(?: [a-zA-Z]+){0,2}$/.test(fullName)

    if(!isEmailValid) return "Email Id is not valid";
    if(!isPasswordValid) return "Password is not valid";
    // if(!isFullName) return "Your name is not valid ";

    return null;
}

