import axios from 'axios';
import { Button, Card, CardBody, CardText, CardTitle, Col, Form, FormFeedback, Input, Label, Row } from 'reactstrap';
import Extras from './Extras';
import Size from './Size';
import Thickness from './Thickness';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';


export default function OrderForm({onShowToast}){
    const extras=['Pepperoni','Domates','Biber','Sosis','Mısır','Sucuk','Jambon','Ananas','Tavuk Izgara','Jalepeno','Kabak','Soğan','Sarımsak'];
    const sizes=['Küçük','Orta','Büyük'];
    const thickness=['Hamur Kalınlığı','İnce','Kalın'];
    const initialValues={
        firstName:'',
        lastName:'',
        orderNote:'',
        size:'',
        thickness:'',
        extras:[]
    }
    const [count,setCount]=useState(1);
    const [total,setTotal]=useState(110.50);
    const handleIncrement = () => {
        setCount(count + 1);
    };
    const handleDecrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    useEffect(() => {
        setTotal(25 * count);
    }, [count]);
    const history=useHistory();
    const[isValid,setIsValid]=useState(false);
    const[errors,setErrors]=useState({
        firstName:false,
        lastName:false,
        orderNote:false,
        size:false,
        thickness:false,
        extras:false
    });
    const [form,setForm]=useState(initialValues);
    useEffect(()=>{
        if(form.firstName.trim().length>=3 
        && form.lastName.trim().length>=3
        && form.size!==''
        && form.thickness!==''
        && form.extras.length>=4 && form.extras.length<=10){
            setIsValid(true);
            console.log("Form validity result:", isValid);
        }else{
            setIsValid(false);
        }

    },[form]);
    const handleChange=(e)=>{
        const {name,value}=e.target;
        let updatedForm={};
        if(name==='firstName'||name==='lastName'){
            if(value.trim().length<3){
                setErrors({...errors,[name]:true})
            }else{
                setErrors({...errors,[name]:false})
            }
        }
        if(name==='size' || name==='thickness'){
            if(value===''){
                setErrors({...errors,[name]:true})
            }else{
                setErrors({...errors,[name]:false})
            }
        }
        if(name==='extras'){
            if(value.length<4 || value>10){
                setErrors({...errors,[name]:true})
            }else{
                setErrors({...errors,[name]:false})
            }
        }
        if(name!=='extras'){
            updatedForm={...form,[name]:value};        
        }else{
            const selectedExtras=form.extras.includes(value)
            ?form.extras.filter((extra)=>extra!==value)
            :[...form.extras,value];
            updatedForm={...form,extras:selectedExtras};
        }
        setForm(updatedForm);        
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!isValid) return;
        axios.post("https://reqres.in/api/pizza",form)
        .then((res)=>{ 
            const data = { ...res.data, count: count, total: total };
            history.push({
                pathname: "/success",
                state: { data: data }
            });
        })
        .catch((err)=>{
            console.warn(err);
            onShowToast("Bir hata oluştu. Lütfen tekrar deneyin.");
        })
        setForm(initialValues);
    }

    return(
        <Form className="form" onSubmit={handleSubmit}>                    
            <Row className="g-0 my-3">
                <Col sm={6}>
                    <Label className='order-title'>
                        Boyut Seç<span className="mx-2" style={{color:'red', fontWeight:'900'}}>*</span>
                    </Label>
                    <Size form={form} sizes={sizes} errors={errors} handleChange={handleChange}/>
                </Col>
                {errors.size && <FormFeedback>Lütfen boyut seçiniz.</FormFeedback>}
                <Col sm={6}>
                    <Label className="order-title" htmlFor='thickness'>
                    Hamur Seç<span className="mx-2" style={{color:'red', fontWeight:'900'}}>*</span>
                    </Label>
                    <Thickness form={form} thickness={thickness} errors={errors} handleChange={handleChange}/>
                </Col>
                {errors.thickness && <FormFeedback>Lütfen hamur kalınlığını seçiniz.</FormFeedback>}
            </Row>            
            <Row className="g-0 my-4">
                <Label className="order-title" style={{display:'block'}}>Ek Malzemeler<span className="mx-2" style={{color:'red', fontWeight:'900'}}>*</span></Label>
                <Label className='gray-text'>En az 4, en fazla 10 malzeme seçebilirsiniz. 5₺</Label>
                <Col>
                    <Extras form={form} extras={extras} errors={errors} handleChange={handleChange}/>
                </Col>                    
            </Row>
            {errors.extras && <FormFeedback>Lütfen az 4 adet malzeme seçiniz.</FormFeedback>}
            <Col>
                <Row className="g-0 my-3 justify-content-between">
                    <Col sm={5}>
                    <Input
                        id='firstName'
                        name='firstName'
                        className='gray-text'
                        placeholder='Adınız'
                        type='text'
                        value={form.firstName}
                        onChange={handleChange}
                        invalid={errors.firstName}
                        style={{backgroundColor:'#faf7f2'}}
                    />
                    </Col>
                    {errors.firstName && <FormFeedback>Lütfen adınızı giriniz.</FormFeedback>}
                    <Col sm={5}>
                    <Input
                        id='lastName'
                        name='lastName'
                        className='gray-text'
                        placeholder='Soyadınız'
                        type='text'
                        value={form.lastName}
                        onChange={handleChange}
                        invalid={errors.lastName}
                        style={{backgroundColor:'#faf7f2'}}
                    />
                    </Col>
                    {errors.lastName && <FormFeedback>Lütfen soyadınızı giriniz.</FormFeedback>}
                </Row>
            </Col>
            <Row className='g-0 my-4'>
                <Label className="order-title" htmlFor='orderNote' style={{display:'block'}}>
                    Sipariş Notu                
                </Label>
                <Input id="orderNote" name="orderNote" className='gray-text' type="textarea" value={form.orderNote} onChange={handleChange} placeholder='Siparişine eklemek istediğin bir not var mı?' style={{backgroundColor: '#faf7f2'}}/>
            </Row>                    
            <hr/>
            <Row className="g-0 my-4">
                <Col>
                    <Button style={{backgroundColor:'#fdc913', border:'none', color:'black'}} onClick={handleDecrement}>
                    -
                    </Button>
                    <Button style={{backgroundColor:'#faf7f2', border:'none', color:'black'}}>
                    {count}
                    </Button>
                    <Button style={{backgroundColor:'#fdc913', border:'none', color:'black'}} onClick={handleIncrement}>
                    +
                    </Button>
                </Col>
                <Col>
                    <Card className='my-2' style={{width: '18rem', backgroundColor:'#faf7f2'}}>
                        <CardBody style={{padding:'1.8rem'}}>
                            <CardTitle class="order-title" tag='h5'>
                                Sipariş Toplamı
                            </CardTitle>
                            <Row className="g-0">
                                <Col>
                                    <CardText className='gray-text'>
                                        Seçimler
                                    </CardText>
                                </Col>
                                <Col>
                                    <CardText className='gray-text' style={{textAlign:'right'}}>
                                        {`25.00₺ x ${count}`}
                                    </CardText>
                                </Col>
                            </Row>
                            <Row className="g-0">
                                <Col>
                                    <CardText className='gray-text' style={{color:'#CE2829'}}>
                                        Toplam
                                    </CardText>
                                </Col>
                                <Col>
                                    <CardText className='gray-text' style={{color:'#CE2829', textAlign:'right'}}>
                                        {`${total}₺`}
                                    </CardText>
                                </Col>
                            </Row>
                        </CardBody>
                        <Button className='order-button order-title mt-2' type='submit' block disabled={!isValid}>
                            SİPARİŞ VER
                        </Button>
                    </Card>
                </Col>
            </Row>
        </Form>           
    )
}