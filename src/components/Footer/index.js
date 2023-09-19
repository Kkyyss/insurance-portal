import styled from "@emotion/styled";

const FooterRoot = styled("footer")`
  bottom: 0;
  width: 100%;
  margin: 0 auto;
  padding: 0 0;
  background-image: linear-gradient(to bottom, #121212 0%, #323232 100%);
  color: #f1f1f1;
  overflow: hidden;
`;

const FooterContainer = styled("div")`
  margin: 0 auto;
  max-width: 1024px;
  padding: 2rem 0 4rem;
  text-align: center;
`;

function Footer() {
  return (
    <FooterRoot>
      <FooterContainer>{`${new Date().getFullYear()} © Company. All Right Reserved.`}</FooterContainer>
    </FooterRoot>
  );
}

export default Footer;
