export default function DisplayProducts({ Products }) {
    return (
        <div>
            <ul>
                {Products.map((p) => {
                    return <li key={p.pName}>
                        {p.pName}
                        {/* <IconButton aria-label="delete">
                        <DeleteIcon />
                        </IconButton> */}
                        {/* <Button variant="text">Text</Button> */}
                    </li>
                })}
            </ul>
        </div>
    )
}