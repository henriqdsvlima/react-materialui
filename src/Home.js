import React from 'react';
import {  
	makeStyles,
	AppBar,
	Toolbar,
	IconButton,
	Drawer,
	Button,
	List,
	Typography,
	Divider,
	ListItem,
	ListItemIcon,
	ListItemText,
	ListSubheader,
	Box,
	Grid,
	Hidden,
	Switch
	}
	from '@material-ui/core';
	import {useTheme} from '@material-ui/core/styles'
	import MenuIcon from '@material-ui/icons/Menu'
	import AccountCircleIcon from '@material-ui/icons/AccountCircle';

	import Apps from '@material-ui/icons/Apps';
	import MoreVert from '@material-ui/icons/MoreVert';
	import VideoCall from '@material-ui/icons/VideoCall'

	import HomeIcon from '@material-ui/icons/Home';
	import Subscriptions from '@material-ui/icons/Subscriptions';
	import Whatshot from '@material-ui/icons/Whatshot'
	import VideoLibrary from '@material-ui/icons/VideoLibrary'
	import History from '@material-ui/icons/History'

	import AddCircle from '@material-ui/icons/AddCircle'
	
	import Sports from '@material-ui/icons/SportsSoccer';
	import MusicNote from '@material-ui/icons/MusicNote'
	import Games from '@material-ui/icons/Games';
	import Movies from '@material-ui/icons/LocalMovies';
	import News from '@material-ui/icons/Announcement';
	import Live from '@material-ui/icons/LiveTv';
	import Hotspot from '@material-ui/icons/OndemandVideo';
	import Video360 from '@material-ui/icons/PlayCircleFilled';


const useStyles = makeStyles((theme) =>({
	root: {
		backgroundColor: theme.palette.background.dark,
		height: '100vh',
	},
	appBar: {
		boxShadow: 'none',
		zIndex: theme.zIndex.drawer + 1,

	},
	logo:{
		height: '30px',
	},
	drawer: {
		width: '240px',
		flexShrink:0,
	},
	drawerPaper: {
		width: 240,
		borderRight: 'none',
	},
	menuIcon:{
		paddingRight:theme.spacing(5),
		paddingLeft: theme.spacing(4)
	},
	icons:{
		paddingRight: theme.spacing(5)
	},
	grow: {
		flexGrow: 1,
	},
	listItem: {
		paddingTop: '8px',
		paddingBottom: '8px',
	},
	listItemText: {
		fontSize: '14px',
	},
	subheader: {
		textTransform:'uppercase',

	}
}));

const videos = [
	{
		id: 1,
		title: 
		'FEED DO USUARIO | Criando uma Rede Social com React.js e .Net Core #29',
		channel: 'Henrique Lima',
		views: '11 mi de visualizações',
		date: 'Há 1 semana',
		avatar: '/images/avatar.jpg',
		thumb: '/images/thumb1.png',
	},
	{
		id: 2,
		title: 
		'COMO MELHORAR SEU CÓDIGO JAVASCRIPT(ESLINT + PRETTIER + EDITORcONFIG  | Dicas e Truques #02',
		channel: 'Henrique Lima',
		views: '11 mi de visualizações',
		date: 'Há 1 semana',
		avatar: '/images/avatar.jpg',
		thumb: '/images/thumb2.png',
	},
	{
		id: 3,
		title: 
		'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
		channel: 'Henrique Lima',
		views: '11 mi de visualizações',
		date: 'Há 1 semana',
		avatar: '/images/avatar.jpg',
		thumb: '/images/thumb3.png',
	},
	{
		id: 4,
		title: 
		'FEED DO USUARIO | Criando uma Rede Social com React.js e .Net Core #29',
		channel: 'Henrique Lima',
		views: '11 mi de visualizações',
		date: 'Há 1 semana',
		avatar: '/images/avatar.jpg',
		thumb: '/images/thumb4.png',
	},
	{
		id: 5,
		title: 
		'COMO MELHORAR SEU CÓDIGO JAVASCRIPT(ESLINT + PRETTIER + EDITORcONFIG  | Dicas e Truques #02',
		channel: 'Henrique Lima',
		views: '11 mi de visualizações',
		date: 'Há 1 semana',
		avatar: '/images/avatar.jpg',
		thumb: '/images/thumb5.png',
	},
	{
		id: 6,
		title: 
		'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
		channel: 'Henrique Lima',
		views: '11 mi de visualizações',
		date: 'Há 1 semana',
		avatar: '/images/avatar.jpg',
		thumb: '/images/thumb6.png',
	},
	{
		id: 6,
		title: 
		'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
		channel: 'Henrique Lima',
		views: '11 mi de visualizações',
		date: 'Há 1 semana',
		avatar: '/images/avatar.jpg',
		thumb: '/images/thumb6.png',
	},
	{
		id: 6,
		title: 
		'CONTEXT API NO EDITOR DE POST | Criando uma Rede Social com React.js e .NET Core #27',
		channel: 'Henrique Lima',
		views: '11 mi de visualizações',
		date: 'Há 1 semana',
		avatar: '/images/avatar.jpg',
		thumb: '/images/thumb6.png',
	},
	
]



function Home({darkMode, setDarkMode}) {
	const theme = useTheme();
   const  classes = useStyles();
   return <div className={classes.root}>
	<AppBar color = "inherit" className ={classes.appBar}>
		<Toolbar>
			<IconButton edge='start' className={classes.menuIcon} color="inherit" aria-label='menu' >
				<MenuIcon />
			</IconButton>
			<img src={theme.palette.type ==='dark' ? '/images/branco.png' : '/images/preto.png'} alt='logo' className={classes.logo}></img>
			<div  className ={classes.grow} />
			<Switch value ={darkMode} onChange={() => setDarkMode(!darkMode)} />

			<IconButton className={classes.icons} >
				<VideoCall />
			</IconButton>

			<IconButton className={classes.icons}>
				<Apps />
			</IconButton>

			<IconButton className={classes.icons}>
				<MoreVert />
			</IconButton>
			
			<Button startIcon={<AccountCircleIcon />} variant='outlined' color="secondary"> Fazer Login</Button>
		</Toolbar>
	</AppBar>
<Box display='flex'>  
<Hidden mdDown>
<Drawer
			className={classes.drawer}
			variant="permanent"
			classes={{
			paper: classes.drawerPaper,
			}}>
		<Toolbar />
		<div className={classes.drawerContainer}>
		  <List>
			  <ListItem button classes ={{root: classes.listItem }}>
				<ListItemIcon> {<HomeIcon />} </ListItemIcon>
				  <ListItemText button
				  classes={{ primary: classes.listItemText,
				  }}
				  primary={'Inicio'}
				   />
			  </ListItem>

			  <ListItem button classes ={{root: classes.listItem }}>
				  <ListItemIcon> {<Subscriptions />} </ListItemIcon>
				  <ListItemText button
				  classes={{ primary: classes.listItemText,
				  }}
				  primary={'Em Alta'}
				   />
			  </ListItem>

			  <ListItem button classes ={{root: classes.listItem }}>
				  <ListItemIcon> {<Whatshot />} </ListItemIcon>
				  <ListItemText button
				  classes={{ primary: classes.listItemText,
				  }}
				  primary={'Inscrições'}
				   />
			  </ListItem>
		  </List>
		  <Divider />
		  <List>
			  <ListItem button>
				  <ListItemIcon>
					  <VideoLibrary />
				  </ListItemIcon>
				  <ListItemText classes={{ primary: classes.listItemText}}
				   primary ={'Biblioteca'} />
			  </ListItem>
			  <ListItem button>
				  <ListItemIcon>
					  <History />
				  </ListItemIcon>
				  <ListItemText classes={{ primary: classes.listItemText,
				  }}
				   primary ={'Histórico'} />
			  </ListItem>
		  </List>
		  <Divider />
			<Box  p={7}>
				  <Typography variant='body2'>
					Faça login para curtir vídeos, comentar e se inscrever.
				  </Typography>
				<Box mt={2}>
				  <Button variant='outlined' color='secondary' startIcon={<AccountCircleIcon />}>
					  Fazer login
				  </Button>
				</Box>
			</Box>
			<Divider />
				  <List
				  component='nav'
				  aria-labelledby='nested-list-subheader'
				  subheader={
					  <ListSubheader
					  component='div'
					  id='nested-list-subheader'
					  className={classes.subheader}
					  >
						  O Melhor do Youtube
					  </ListSubheader>
				  }
				>

			<ListItem button classes ={{root: classes.listItem }}>
				<ListItemIcon> {<MusicNote />} </ListItemIcon> <ListItemText primary={'Música'}/>
			  </ListItem>

			  <ListItem button>
				<ListItemIcon> {<Sports />} </ListItemIcon> <ListItemText classes={{ primary: classes.listItemText}} primary={'Esportes'}/>
			  </ListItem>
			  <ListItem button>
				<ListItemIcon> {<Games />} </ListItemIcon> <ListItemText classes={{ primary: classes.listItemText}} primary={'Jogos'}/>
			  </ListItem>

			  <ListItem button>
				<ListItemIcon> {<Movies />} </ListItemIcon> <ListItemText classes={{ primary: classes.listItemText}} primary={'Filmes'}/>
			  </ListItem>

			  <ListItem button>
				<ListItemIcon> {<News />} </ListItemIcon> <ListItemText classes={{ primary: classes.listItemText}} primary={'Notícias'}/>
			  </ListItem>

			  <ListItem button>
				<ListItemIcon> {<Live />} </ListItemIcon> <ListItemText classes={{ primary: classes.listItemText}} primary={'Ao vivo'}/>
			  </ListItem>

			  <ListItem button>
				<ListItemIcon> {<Hotspot />} </ListItemIcon> <ListItemText classes={{ primary: classes.listItemText}} primary={'Destaques'}/>
			  </ListItem>

			  <ListItem button>
				<ListItemIcon> {<Video360 />} </ListItemIcon> <ListItemText classes={{ primary: classes.listItemText}} primary={'Videos360'}/>
			  </ListItem>

			  <Divider />
				
			  <ListItem button>
				<ListItemIcon> {<AddCircle />} </ListItemIcon> <ListItemText classes={{ primary: classes.listItemText}} primary={'Procurar Canais'}/>
			  </ListItem>
			
				<Divider />
			</List>  
		</div>
	  </Drawer>
</Hidden>

  <Box p={8}>
  	<Toolbar />
	<Typography
	  variant='h5'
	  color='textPrimary'
	  style={{ fontWeight: 600}}>

		  Recomendados
	</Typography>

	<Grid container spacing={4}>
		{
			videos.map((item, index) => (
				<Grid item lg={3} md={4} sm={6} xs={12}> 
				<Box>
					<img
					style={{width: '100%'}}
					alt={ item.title}
					src={item.thumb}
					/>
				<Box>
					<Typography
						style={{ fontWeight: 600}}
						gutterBottom
						variant='body1'
						color='textPrimary'
					>
						{item.title}
					</Typography>
					<Typography
					style={{ fontWeight: 600}}
					gutterBottom
					variant='body1'
					color='textPrimary'>

					</Typography>
					<Typography
					display='block'
					variant='body2'
					color='textSecondary'
					>
					{item.channel}
					</Typography>
					<Typography variant='body2' color='textSecondary'>
						{`${item.views} * ${item.date}`}

					</Typography>
				</Box>
				</Box>

				</Grid>
			))
		}
	</Grid>

  	</Box>
</Box>   

   </div>
}
export default Home;