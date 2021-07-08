import React from 'react'
import { Button, Header, Image, Modal, Icon } from 'semantic-ui-react'
import { Formik, Form } from "formik";
import * as Yup from "yup";
import KodlamaioTextInput from '../../utilities/customFormControls/KodlamaioTextInput';

export default function EmployerRegister() {

    const [open, setOpen] = React.useState(false)
    const initialValues = {
        companyName: "",
        webAddress: "",
        email: "",
        password: "",
        repassword: "",
        phoneNumber: ""
    }

    const schema = Yup.object({
        companyName: Yup.string().required("Zorunlu alan*"),
        webAddress: Yup.string().required("Zorunlu alan*"),
        email: Yup.string().email().required("Zorunlu alan*"),
        password: Yup
            .string()
            .required('Şifrenizi giriniz'),
        repassword: Yup
            .string()
            .required('Şifrenizi tekrar giriniz'),
        phoneNumber: Yup.string().required("Zorunlu alan *")
    });

    return (
        <div>
            <Image size='medium' centered src='https://cdn.pixabay.com/photo/2018/07/12/21/32/subscribe-3534409_960_720.jpg' />
            <Modal size='small'
                onClose={() => setOpen(false)}
                onOpen={() => setOpen(true)}
                open={open}
                trigger={
                    <Button animated color='blue'>
                        <Button.Content visible >İş Veren Kayıt Ekranı</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>}
            >
                <Modal.Content image>
                    <Image size='medium' src='https://cdn.pixabay.com/photo/2016/02/16/16/57/login-1203603_960_720.png' wrapped />
                    <Modal.Description>
                        <Header>Aramıza Katıl!</Header>
                    </Modal.Description>
                </Modal.Content>
                <Modal.Actions>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={schema}
                        onSubmit={(values) => {
                            console.log(values)
                        }}
                    >
                        <Form className="ui form">
                            <KodlamaioTextInput name="companyName" placeholder="Şirket Adı:" />
                            <KodlamaioTextInput name="webAddress" placeholder="Web Site:" />
                            <KodlamaioTextInput name="email" placeholder="E-posta Adresi:" />
                            <KodlamaioTextInput name="password" placeholder="Şifre:" />
                            <KodlamaioTextInput name="repassword" placeholder="Şifre Tekrarı:" />
                            <KodlamaioTextInput name="phoneNumber" placeholder="Telefon No:" />
                            <Button
                                type='submit'
                                content="Kayıt İşlemini Tamamla"
                                labelPosition='right'
                                icon='checkmark'
                                positive
                            />
                        </Form>
                    </Formik>
                </Modal.Actions>
            </Modal>
        </div>
    )
}