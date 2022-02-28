import { Image, Typography } from "antd"

const { Title } = Typography

const Error = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <Title>
                This one is under construction
            </Title>
            <Image
                width={200}
                src="/static/mechanic.jpg"
            />
            <p>
                <a href='https://www.freepik.com/vectors/kids-car'>Kids car vector created by brgfx - www.freepik.com</a>
            </p>
        </div>
    )
}

export default Error