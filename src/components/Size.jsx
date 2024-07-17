import { Col, Input, Label } from 'reactstrap';

export default function Size(props){
    const {form,sizes,errors,handleChange}=props;
    return(
        <>
            {
                sizes.map((size,index)=>{
                    return(
                        <Col check key={index} style={{display:'flex'}}>
                            <Input
                                id={`size${index}`}
                                name='size'
                                type='radio'
                                value={size}
                                onChange={handleChange}
                                checked={form.size===size}
                                style={{backgroundColor:'#faf7f2'}}
                            />
                            <Label  className='gray-text' htmlFor={`size${index}`} check>
                                <span className="mx-2">{size}</span>   
                            </Label>
                        </Col> 
                    )
                })
            }
        </> 
    )
       
}