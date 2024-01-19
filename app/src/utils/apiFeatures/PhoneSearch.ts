import { parsePhoneNumber} from "libphonenumber-js"

const PhoneSearch = ({phNo}: any) => {
    const phone = parsePhoneNumber(phNo, "IN")
    return phone.number
}