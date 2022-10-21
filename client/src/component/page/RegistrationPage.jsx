//#region react
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from "react-router";
//#endregion

//#region mui
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
//#endregion

//#region 이미지
import image1 from "../image/후원목록이미지.png"
//#endregion

export default function RegistrationPage() {

    const navigate = useNavigate();
    const location = useLocation();

    //#region uesState 변수

    const [requestitem, setRequestitem] = useState("");
    const [address, setAddress] = useState("");
    const [price, setPrice] = useState();
    const [files, setFiles] = useState(image1);
    const [docxfiles, DocxsetFiles] = useState("선택된 파일 없음");
    //#endregion

    //#region 이미지 인코딩
    const encodeFileToBase64 = (fileBlob) => {
        const reader = new FileReader();
        reader.readAsDataURL(fileBlob);

        return new Promise((resolve) => {
            reader.onload = () => {
                setFiles(reader.result);
                resolve();
            };
        });
    };
    //#endregion

    //#region 렌더링
    return (
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography component="h1" variant="h4" align="center">
                    후원 요청 등록
                </Typography>
                <br />
                <React.Fragment>
                    <React.Fragment>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Box sx={{ minWidth: 200 }}>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">요청 항목</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Request item"
                                            value={requestitem}
                                            onChange={(e) =>
                                                setRequestitem(e.target.value)
                                            }
                                        >
                                            <MenuItem value={"병원비"}>병원비</MenuItem>
                                            <MenuItem value={"생활비"}>생활비</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="houseAddress"
                                    label="집주소"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        setAddress(e.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    id="request amount"
                                    label="요청금액 (ETH)"
                                    fullWidth
                                    variant="standard"
                                    onChange={(e) => {
                                        setPrice(e.target.value)
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="File" value={docxfiles}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" component="label">
                                    문서올리기
                                    <input hidden accept="." multiple type="file"
                                    />
                                </Button>&nbsp;
                            </Grid>
                            <Grid item xs={12} >
                                <Card
                                    sx={{ height: '100%', display: 'flex' }}
                                >
                                    <CardMedia
                                        component="img"                                        
                                        image={files}
                                        alt="random"
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Button
                                    variant="contained"
                                    component="label"
                                >
                                    사진올리기
                                    <input
                                        type="file"
                                        hidden
                                        onChange={(e) => {
                                            encodeFileToBase64(e.target.files[0])
                                        }}
                                    />
                                </Button>&nbsp;
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox color="secondary" />}
                                    label="개인 정보 열람 동의"
                                />
                            </Grid>
                        </Grid>
                    </React.Fragment>
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button
                            variant="contained"
                            sx={{ mt: 3, ml: 1 }}
                            onClick={() => {
                                navigate('/');
                            }}
                        >등록
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ mt: 3, ml: 1 }}
                            onClick={() => {
                                navigate('/');
                            }}
                        >취소
                        </Button>
                    </Box>
                </React.Fragment>
            </Paper>
        </Container>
    );
    //#endregion
}