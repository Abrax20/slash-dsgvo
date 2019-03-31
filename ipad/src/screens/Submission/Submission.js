import React from 'react';

import {
  Text,
  Content,
  Container,
} from './styled';
import Signature from "../../components/Signature/Signature";
import PrimaryButton from "../../components/Buttons/PrimaryButton";
import SecondaryButton from "../../components/Buttons/SecondaryButton";

export const Submission = ({
  date='12.02.10',
  location='Berlin',
  phone="+1111111111",
  name='Moritz Tittler',
  companyName='Nexenio',
  email='example@example.com',
  dataProtectionOfficer='Tom',
  address='Unter den Linden 1'
}) => (
<Container>
  <Content>
    <Text>
      According to § 35 BDSG you can at any time demand the correction,{'\n'}
      deletion and blockage of individual personal data from the { companyName }.{'\n'}
      {'\n'}
      You are granted the right to completely withdraw the given declaration of consent at any time without any incurring costs.{'\n'}
      You can send the revocation either by post or by e-mail to the Data Protection Officer (DPO) or to the company.{'\n'}
      {'\n'}
      Your contact for questions regarding data protection:{'\n'}
      {'\n'}
      If you have any questions or concerns, please contact { dataProtectionOfficer }, your Data Protection Officer (DPO): { email } , { phone }, { address }{'\n'}
      {'\n'}
      Hereby I agree that{'\n'}
      {'\n'}
      •	the company { companyName } is allowed to contact me in the future via e-mail/telephone/fax/SMS regarding the presented products.{'\n'}
      {'\n'}
      •	my given data, including e-mail address, telephone number, mobile phone number, company name, job title, address can be collected and stored.{'\n'}
      {'\n'}
      •	I have acknowledged and understood my rights regarding the { companyName } and the data wich is stored about me.{'\n'}
    </Text>
  </Content>
  <Signature />
  <Text>{ name } { location } { date }</Text>
  <PrimaryButton alignSelf={'flex-start'}>Submit</PrimaryButton>
  <SecondaryButton alignSelf={'flex-start'}>Reset</SecondaryButton>
</Container>);
export default Submission;
