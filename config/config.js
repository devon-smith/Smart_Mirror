/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */
var config = {
	address: "0.0.0.0", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["0.0.0.0/0"], 	// Set [] to allow all IP addresses 127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.0/99
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "Devon's Cal",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "google cal link"					}
				]
			}
		},
		{
			module: 'MMM-GmailFeed',
			position: 'bottom_bar',
			config: {
				username: 'gmail',
				password: 'password',
				updateInterval: 60000,
				maxEmails: 3,
				maxSubjectLength: 38,
				maxFromLength: 15,
				playSound: true
			}
		},
		{
			module: "compliments",
			position: "bottom_bar"
		},
		{
		
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "",
				locationID: "", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: ""
			}
		},
		{
		   module: "MMM-Pollen",
		   position: "top_right",
		   header: "Pollen Forecast",
		   config: {
			updateInterval: 3 * 60 * 60 * 1000, // every 3 hours
			zip_code: "94549"
		   }
		},
		{
			module: "newsfeed",
			position: "middle_center",
			config: {
				feeds: [
					
					/*{	title:"CNBC",
						url:"https://www.cnbc.com/id/20409666/device/rss/rss.html?x=1",
					},*/
					{
						title: "Seeking Alpha",
						url: "https://seekingalpha.com/feed.xm/",
					},							
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true,
				ignoreOlderThan: 24 * 60 * 60 * 1000, // 1 day
			}		
		},
		{
		  module: "MMM-DailyAlarm",
		  position:"top_right",
		  config: {
		    alarms: [
		      {
			time: "22:40:00", //REQUIRED
			beforeText: "Time to Bed",
		      },
			{
				time:"13:00:00",
				beforeText: "End of Market",
				days:[1,2,3,4,5],
			},
		    ]
		  }
		},
		{
			module: 'MMM-TweetsByTimelineOrList',
			position: 'top_left',
			config: {
				// visit the url below for the twitter keys/tokens
				// https://dev.twitter.com/oauth/overview/application-owner-access-tokens
				consumer_key: '',
				consumer_secret: '',
				access_token_key: '',
				access_token_secret: '',
				// set the username and either timeline or listname
				screenName: '',
				listToShow: '',
				tweetsToShowAtATime: 3,
			}
		},
		{
			module:"MMM-Reddito",
			position: "top_left",
			config:{
				updateInterval: 3600000,
				//rotateInterval: 45,
				headerText: "Reddit",
				subreddit:"stocks",
				sortby: "top",
				count: "6",
				Width:"700px",

				height:"8em",
				marquee:true,
				marqueeSpeed: "30000",			
			}
		},
		{
		  	module: "MMM-GoogleSheets",
		  	header: "Google Sheets",
		  	position: "top_right",
		 	config: {
		    		url: "",
		    		sheet: "Sheet1",
		    		range: "E1:F8",
				updateInterval: 1, // minutes
			    requestDelay:0, // ms
			    updateFadeSpeed: 0, // ms
			    cellStyle: "flat",
			    border: "normal",
			    stylesFromSheet: [],
			    customStyles: ["font-size: 14px", "padding: 2px"],
			    headerStyles: [],
			    //styleFunc: (rowNum, colNum, cellProps) => {if(rowNum%2 == 0){return "background-color:#666;"}} // Colors every other row backgrou
		  	}
		},
		{
			module: 'MMM-page-indicator',
			position: 'bottom_bar',
			config: {
				pages:3,
			}
		},
		{
       		 	module: 'MMM-pages',
        		config: {
                		modules:
					[ ["MMM-AlexaControl", "calendar", "MMM-GmailFeed", "compliments","weather","MMM-Pollen"],
					["MMM-Reddito", "MMM-AlexaControl", "MMM-TweetsByTimelineOrList","MMM-GmailFeed","newsfeed", "MMM-Jast","MMM-GoogleSheets"],
					 ["MMM-AlexaControl", "calendar","MMM-DailyAlarm","random_quotes","MMM-Screencast"]                  	
					],
              			fixed: ["clock"],
               			hiddenPages: {
                    			"screenSaver": [ "clock","MMM-SomeBackgroundImageModule" ],
                    			"admin": [ "MMM-ShowMeSystemStatsModule", "MMM-AnOnScreenMenuModule" ],
                		},
        		}
    		},
		{
			module: "MMM-Jast",
			position: "top_right",
			config: {
				maxWidth: "100%",
				updateIntervalInSeconds: 300,
				fadeSpeedInSeconds: 3.5, // Higher value: vertical -> faster // horizontal -> slower
				scroll: "none", // One of ["none", "vertical", "horizontal"]
				showCurrency: true,
				showChangePercent: true,
				showChangeValue: false,
				showChangeValueCurrency: false,
				showDepotGrowth: false,
				numberDecimalsValues: 2,
				numberDecimalsPercentages: 2,
				stocks: [
					{ name: "SPY", symbol: "SPY" },
					{ name: "Bitcoin", symbol: "BTC-USD"},
					{ name: "Helium", symbol: "HNT1-USD" },
					{ name: "Apple", symbol: "AAPL"},
					//{ name: "10 Year", symbol: "^TNX"},
					//{ name: "SPY Future", symbol: "YM=F"},
					{ name: "VIX", symbol: "^VIX"},
				]
			}
		},
		/*{
			module: 'MMM-SmartWebDisplay',
			position: 'middle_center',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
				logDebug: true, //set to true to get detailed debug logs. To see them : "Ctrl+Shift+i"
				height:"100%", //hauteur du cadre en pixel ou %
				width:"100%", //largeur
		       		updateInterval: 0, //in min. Set it to 0 for no refresh (for videos)
		        	NextURLInterval: 0, //in min, set it to 0 not to have automatic URL change. If only 1 URL given, it will be updated
		        	displayLastUpdate: true, //to display the last update of the URL
						displayLastUpdateFormat: 'ddd - HH:mm:ss', //format of the date and time to display
		        	url: ["https://www.youtube.com/watch?v=BZ_JVD9ReMk", ], //"https://www.nasdaq.com/market-activity/funds-and-etfs/spy/advanced-charting?timeframe=5D"source of the URL to be displayed
						scrolling: "no", // allow scrolling or not. html 4 only
						shutoffDelay: 10000 //delay in miliseconds to video shut-off while using together with MMM-PIR-Sensor 
				}
		},*/
		{
			module: 'MMM-AlexaControl',
			position: 'middle_center',
			config:{
				image: false, 
				pm2ProcessName: "mm",
				vcgencmd: "vcgencmd", 
				monitorToggle: true,
				notifications: [
					{
					name:'Stocks',
					port: 11101,
					OnOff: false,
					notification: ["PAGE_CHANGED", 0],	
					},
					{
					name:'Focus',
					port: 11103,
					OnOff: false,
					notification: ["PAGE_CHANGED", 1],	
					},
					{
					name:'General',
					port: 11104,
					OnOff: false,
					notification: ["PAGE_CHANGED", 2],	
					},
				],
				commands: [
					/*{
						name:'Command 1',
						port:11102,
						OnOff: false,
						command:"<COMMAND>",
					},*/
				]	
			}
		},
		{
			module: 'random_quotes',
			position: 'lower_third',
			config: {
				// The config property is optional
				// Without a config, a random quote is shown,
				// selected from all of the categories available.
			}
		},
		{
			module: 'MMM-Screencast',
			position: 'middle',
			config: {
				height: 700,
				width: 900,
				position: 'middle',
				port: 8082,// The config property is optional
				// Without a config, a random quote is shown,
				// selected from all of the categories available.
			}
		},/*
		{
			module: 'MMM-PIR-Sensor',
			config: {
				sensorPin: 23,
				powerSavingDelay: 60, // Turn HDMI OFF after 60 seconds of no motion, until motion is detected again
				preventHDMITimeout: 4, // Turn HDMI ON and OFF again every 4 minutes when power saving, to avoid LCD/TV timeout
				supportCEC: true, 
				presenceIndicator: "fa-eye", // Customizing the indicator
				presenceOffIndicator: "fa-eye", // Customizing the indicator
				presenceIndicatorColor: "#f51d16", // Customizing the indicator
				presenceOffIndicatorColor: "#2b271c" // See 'Configuration options' for more information.
			},
		},
		{
			module: "MMM-Widget",
			position:'bottom_bar',
			config: {
				
				widgets: [{
					
						html:`
						<!-- TradingView Widget BEGIN -->
						<div class="tradingview-widget-container">
						<div id="tradingview_8fd34"></div>
						<div class="tradingview-widget-copyright"><a href="https://www.tradingview.com/symbols/AMEX-SPY/" rel="noopener" target="_blank"><span class="blue-text">SPY Chart</span></a> by TradingView</div>
						<script type="text/javascript" src="https://s3.tradingview.com/tv.js"></script>
						<script type="text/javascript">
							new TradingView.widget(
							{
							"width": 1000,
							"height": 610,
							"symbol": "AMEX:SPY",
							"interval": "W",
							"timezone": "America/Los_Angeles",
							"theme": "dark",
							"style": "1",
							"locale": "en",
							"toolbar_bg": "#f1f3f6",
							"enable_publishing": false,
							"hide_top_toolbar":true,
							"allow_symbol_change": true,
							"studies": [
								"RSI@tv-basicstudies",
							],
							"container_id": "tradingview_8fd34"
							}
							);
						</script>
						</div>
						<!-- TradingView Widget END -->
						`,
						position: "bottom_bar",
						width: "1000px",
						height: "400px",
						backgroundColor: "#00000", 
				},],
				 
			},
		}, */

	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
