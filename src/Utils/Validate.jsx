export const checkValidData=(email,password) => {
    const isemailvalid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,})$/.test(email);
    const ispasswordvalid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    if(!isemailvalid)return "Email is not valid";
    if(!ispasswordvalid)return "Password is not valid";
    return null;
}