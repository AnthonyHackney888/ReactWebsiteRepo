import React from 'react'
import { Container} from '../../globalStyles';
import {Form,FormBody,FormBodyInput,FormInput} from './EmailForm.elements'
import { Button } from '../../globalStyles';
const EmailForm =({
    
  }) => {
  return (
    <Container>
        <Form>
            <FormInput name="email" type="email" 
            placeholder="Your email" />
            <FormBody>
            <FormBodyInput name="email content" type="text" placeholder="Email body" />
            <Button fontBig>Submit</Button>
        </FormBody>
        </Form>
        
        
    </Container>
  )
}

export default EmailForm