import { MainFooter } from "../styles/sharedStyles";

const Footer = () => (
  <>
    <MainFooter size='sm'>&#169; {(new Date().getFullYear())} Privacy / Terms </MainFooter>
  </>
)
export default Footer;