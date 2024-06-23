import { Description } from "@mui/icons-material";
import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const pageList = [
    {
        name: 'Search API Data',
        path: '/displayApiData',
        description: 'Search any keyword in API Data'
    },
    {
        name: 'Counter',
        path: '/counter',
        description: 'Increase or Decrease the Counter'
    },
    {
        name: 'Todo List',
        path: '/todoList',
        description: 'Add, Edit, Delete your Todo List'
    }
]

const Home = () => {
    return (
        <div>
            <Box className="homepage" sx={{ display:"flex", flexWrap:"wrap", gap:"20px", justifyContent:"space-evenly", padding:"0% 7% 0% 7%"}}>
                {
                    pageList.map((page) => (
                        <Link to={page.path} key={page.name}>
                            <Card elevation='24' className="homepage" sx={{height:"130px",width:"100%", maxWidth:"225px" , margin:"7%"}}>
                                <CardContent>
                                    <Typography variant="h6">
                                        {page.name}
                                    </Typography>
                                    <Typography>
                                        {page.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    ))
                }
            </Box>
        </div>
    )
}
export default Home;