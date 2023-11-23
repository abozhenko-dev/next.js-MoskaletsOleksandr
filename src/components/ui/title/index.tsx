type Props = {
  title: string
}

const Title = ({ title }: Props) => (
    <h1 className='page-title'>{title}</h1>
)

export default Title;
