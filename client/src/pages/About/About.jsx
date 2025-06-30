import React from "react";
//styles>>
//mui
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Grid, List, ListItem, Typography } from "@mui/material";

//table mui
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

//img
import profileImg from "./img/me.png";

//style mui
const centerFlex = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

// skills data for table
const skills = [
  { name: "React", level: "خوب" },
  { name: "JavaScript", level: "خوب" },
  { name: "HTML", level: "عالی" },
  { name: "CSS", level: "عالی" },
  { name: "TypeScript", level: "متوسط" },
  { name: "Redux", level: "متوسط" },
  { name: "Git", level: "خوب" },
  { name: "Material UI", level: "خوب" },
  { name: "Sass", level: "متوسط" },
  { name: "Next.js", level: "در حال یادگیری" },
];

export default function About() {
  return (
    <Container
      // dir="rtl"
      maxWidth={false}
      sx={{
        py: 4,
        bgcolor: "#212121",
        minWidth: "300px",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          ...centerFlex,
        }}
      >
        {/* 🔹 باکس اسم ---------------------*/}
        <Grid
          item
          xs={12}
          md={4}
          sx={{
            p: 4,
            color: "#e0e0e0",
            width: { xs: "100%", sm: "100%", md: "49%" },
            minWidth: "350px",
            height: "450px",
            maxHeight: "500px",
            border: "1px solid #eeeeee",
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              flexDirection: "column",
              ...centerFlex,
            }}
          >
            <Typography
              variant="h1"
              fontWeight="bold"
              sx={{
                fontSize: {
                  xs: "2.5rem",
                  sm: "3.5rem",
                  md: "4rem",
                  lg: "5rem",
                },
              }}
            >
              shirin mardani
            </Typography>
            <Typography variant="h6" gutterBottom>
              Front-End developer
            </Typography>
          </Box>
        </Grid>

        {/* 🔹 باکس عکس ---------------------------*/}
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            border: "1px solid #eeeeee",
            width: "49%",
            minWidth: "350px",
            height: "450px",
            maxHeight: "500px",
            ...centerFlex,
          }}
        >
          <Box
            sx={{
              width: "100%",
              height: "100%",
              ...centerFlex,
            }}
          >
            <img
              src={profileImg}
              alt="profile picture"
              style={{
                width: "90%",
                height: "90%",
                objectFit: "cover",
              }}
            />
          </Box>
        </Grid>

        {/* 🔹 درباره من ---------------------------*/}
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            border: "1px solid #eeeeee",
          }}
        >
          <Grid item xs={12} md={4} sx={{ color: "#e0e0e0", width: "100%" }}>
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography variant="h4" fontWeight="bold" align="right">
                هدف
              </Typography>
              <Typography variant="h6" gutterBottom align="right">
                توسعه‌دهنده‌ی جونیور فرانت‌اند با حدود یک سال تجربه‌ی فشرده در
                یادگیری، تمرین و اجرای پروژه‌های واقعی به صورت خودآموز. به دنبال
                فرصتی برای رشد حرفه‌ای در تیمی که به یادگیری، کیفیت کد و کار
                تیمی اهمیت می‌دهد. مشتاق یادگیری فریم‌ورک‌های جدید مانند Next.js
                و ارتقای مهارت‌ها در یک محیط چابک و خلاقانه
              </Typography>
            </Box>
          </Grid>
        </Grid>
        {/* 🔹 moore--------------------------------- */}
        <Grid
          container
          spacing={1}
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gridTemplateRows: {
              xs: "repeat(3, auto)",
              sm: "repeat(2, auto)",
              lg: "repeat(1, 1fr)",
            },
            width: "100%",
            height: {
              xs: "auto",
              sm: "auto",
              lg: "900px",
            },
          }}
        >
          {/* ---------1--------- */}
          <Grid
            item
            xs={12}
            sx={{
              overflow: "scroll",
              border: "1px solid #eeeeee",
              color: "#e0e0e0",
              gridRow: { lg: "span 3" },
              overflow: { xs: "auto", sm: "auto", lg: "hidden" },
            }}
          >
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography
                variant="h4"
                fontWeight="bold"
                align="right"
                sx={{ mb: 4 }}
              >
                مهارت‌ها
              </Typography>
              {/* --------- table >>---------- */}
              <TableContainer //قاب اصلی جدول هست، باعث می‌شه اسکرول‌پذیر بشه
                sx={{ mt: 2, bgcolor: "#212121" }}
              >
                {/* -------------------------- */}
                {/* aria-label="skills table" => Screen Reader */}
                <Table size="small" aria-label="skills table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        align="left"
                        sx={{
                          color: "#e0e0e0",
                          fontWeight: "bold",
                          fontSize: {
                            xs: "1.2rem",
                            sm: "1.5rem",
                            md: "1.8rem",
                            lg: "1.8rem",
                          },
                          pb: 2,
                        }}
                      >
                        مهارت
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{
                          color: "#e0e0e0",
                          fontWeight: "bold",
                          fontSize: {
                            xs: "1.2rem",
                            sm: "1.5rem",
                            md: "1.8rem",
                            lg: "1.8rem",
                          },
                          pb: 2,
                        }}
                      >
                        سطح
                      </TableCell>
                    </TableRow>
                  </TableHead>

                  {/* ------------------- */}
                  <TableBody>
                    {skills.map((row, idx) => (
                      <TableRow key={idx}>
                        <TableCell align="left" sx={{ color: "#e0e0e0" }}>
                          {row.name}
                        </TableCell>
                        <TableCell
                          align="right"
                          sx={{
                            color: "#e0e0e0",
                            fontSize: {
                              xs: "1.2rem",
                              sm: "1.5rem",
                              md: "1.5rem",
                              lg: "1.6rem",
                            },
                          }}
                        >
                          {row.level}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
          </Grid>
          {/* --------2---------- */}
          <Grid
            item
            xs={12}
            sx={{
              border: "1px solid #eeeeee",
              gridRow: {
                xs: "span 1",
                sm: "span 2",
                lg: "span 3",
              },

              color: "#e0e0e0",
              overflow: "scroll",
            }}
          >
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography
                variant="h5"
                gutterBottom
                align="right"
                sx={{
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.5rem",
                    md: "1.8rem",
                    lg: "1.5rem",
                  },
                }}
              >
                فروشگاه اینترنتی ساده
              </Typography>
              <Typography variant="h5" fontWeight="bold">
                (React + Tailwind + Fake API)
              </Typography>
              <List
                
                sx={{
                  mt: 2,
                  color: "#e0e0e0",
                  direction: "rtl",
                  listStyleType: "disc",
                }}
              >
                <ListItem sx={{ display: "list-item" ,textAlign: "right"}}>
                  نمایش لیست محصولات با امکان فیلتر و مرتب‌سازی
                </ListItem>
              </List>
              <Typography variant="h5" fontWeight="bold">
               
              </Typography>
              <Typography variant="h5" fontWeight="bold"></Typography>
              <Typography variant="h5" fontWeight="bold">
             
              </Typography>
              <Typography variant="h5" fontWeight="bold">
               
              </Typography>
            </Box>
          </Grid>
          {/* --------3---------- */}
          <Grid
            item
            xs={12}
            // md={4}
            sx={{
              border: "1px solid #eeeeee",
              color: "#e0e0e0",
              gridRow: { lg: "span 3" },
              overflow: "scroll",
            }}
          >
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                shirin mardani
              </Typography>
              <Typography
                variant="h6"
                gutterBottom
                sx={{
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.5rem",
                    md: "1.8rem",
                    lg: "2rem",
                  },
                }}
              >
                front end developer Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Deleniti iusto soluta laboriosam distinctio ab
                maiores do Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Deserunt velit aliquam dicta laborum eius. Mollitia rerum
                possimus at quae facere placeat accusantium culpa assumenda
                voluptatum dolores voluptas quisquam, cum officia delectus
                fugiat ullam ea explicabo asperiores, rem pariatur nobis
                repellat. lorem reiciendis sapiente voluptates quibusdam.
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* 🔹 media */}
        <Grid
          container
          spacing={2}
          sx={{
            width: "100%",
            border: "1px solid #eeeeee",
          }}
        >
          <Grid item xs={12} md={4} sx={{ color: "#e0e0e0", width: "100%" }}>
            <Box
              sx={{
                p: 4,
              }}
            >
              <Typography variant="h5" fontWeight="bold">
                about me
              </Typography>
              <Typography variant="h6" gutterBottom>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et iste
                aut architecto enim modi ullam non, commodi delectus facilis
                voluptatem, quibusdam qui ipsum tempora asperiores natus est
                nobis praesentium id!
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
