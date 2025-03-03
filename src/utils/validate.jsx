export const validateData = (email,password) => {
    const isEmailValid =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    if(!isEmailValid) return "EmailId is not valid";

    const isPasswordValid = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password);

    if(!isPasswordValid) return "Password is not valid";

    return null;

}