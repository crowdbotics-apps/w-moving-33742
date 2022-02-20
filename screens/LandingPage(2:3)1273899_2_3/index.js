import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_643}>
        <View style={styles.View_2_325}>
          <Text style={styles.Text_2_325}>A+ Studio</Text>
        </View>
        <View style={styles.View_2_335}>
          <View style={styles.View_2_336}>
            <Text style={styles.Text_2_336}>Home</Text>
          </View>
          <View style={styles.View_2_337}>
            <Text style={styles.Text_2_337}>What We Do</Text>
          </View>
          <View style={styles.View_2_338}>
            <Text style={styles.Text_2_338}>Service</Text>
          </View>
          <View style={styles.View_2_339}>
            <Text style={styles.Text_2_339}>Project</Text>
          </View>
          <View style={styles.View_2_340}>
            <Text style={styles.Text_2_340}>Blog</Text>
          </View>
          <View style={styles.View_2_341}>
            <Text style={styles.Text_2_341}>Contact</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_646}>
        <View style={styles.View_2_644}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e89/f4ac/633f8311a5fe247780cc1c8776032c19"
            }}
            style={styles.ImageBackground_2_342}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e89/f4ac/633f8311a5fe247780cc1c8776032c19"
            }}
            style={styles.ImageBackground_2_423}
          />
        </View>
        <View style={styles.View_2_504} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eeb2/2a0a/7800570074610f5ec3da524ee58c64bf"
          }}
          style={styles.ImageBackground_2_507}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/de62/af18/51d67b2160cd8a27abfe9e136c2bf1b3"
          }}
          style={styles.ImageBackground_2_510}
        />
        <View style={styles.View_2_645}>
          <View style={styles.View_2_512}>
            <Text style={styles.Text_2_512}>A Digital Product Agency</Text>
          </View>
          <View style={styles.View_2_513}>
            <Text style={styles.Text_2_513}>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </Text>
          </View>
          <View style={styles.View_2_514}>
            <View style={styles.View_2_515}>
              <Text style={styles.Text_2_515}>Contact Now</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_647}>
        <View style={styles.View_2_516}>
          <Text style={styles.Text_2_516}>
            Several selected clients, who already believe in our service.
          </Text>
        </View>
        <View style={styles.View_2_518}>
          <Text style={styles.Text_2_518}>Our Client</Text>
        </View>
        <View style={styles.View_2_520}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/32bd/c170/9752a32e3e933e5a7f7ae4f085188e89"
            }}
            style={styles.ImageBackground_2_521}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2352/9090/fe2de66a2ca40fbf9126334023cf55a8"
          }}
          style={styles.ImageBackground_2_524}
        />
        <View style={styles.View_2_526}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/26c0/9e49/ca41a480dd056e94f16457a2fdac7d0e"
            }}
            style={styles.ImageBackground_2_527}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fda/1037/ebad4a5d36a9dbac893607aa53d5c4eb"
          }}
          style={styles.ImageBackground_2_534}
        />
      </View>
      <View style={styles.View_2_648}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ce5/4688/d966dd18038902d422c9d2e3b4266952"
          }}
          style={styles.ImageBackground_2_159}
        />
        <View style={styles.View_2_161}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b76/c424/e09cacd147d0a2f4e1316f9a3af3aaab"
            }}
            style={styles.ImageBackground_2_162}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b76/c424/e09cacd147d0a2f4e1316f9a3af3aaab"
            }}
            style={styles.ImageBackground_2_243}
          />
        </View>
        <View style={styles.View_2_324} />
        <View style={styles.View_2_505} />
        <View style={styles.View_2_543}>
          <View style={styles.View_2_544}>
            <Text style={styles.Text_2_544}>
              We build readymade websites, mobile applications, and elaborate
              online business services.
            </Text>
          </View>
          <View style={styles.View_2_545}>
            <View style={styles.View_2_546}>
              <Text style={styles.Text_2_546}>
                How can we help your Business ?
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_551}>
          <View style={styles.View_2_552} />
          <View style={styles.View_2_553} />
          <View style={styles.View_2_554}>
            <Text style={styles.Text_2_554}>
              We present you a proposal and discuss niffty-gritty like
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f610/d40d/3191e7759e57e18d22d49028f77c3ebc"
            }}
            style={styles.ImageBackground_2_555}
          />
          <View style={styles.View_2_561}>
            <Text style={styles.Text_2_561}>Business Idea Planning</Text>
          </View>
        </View>
        <View style={styles.View_2_562}>
          <View style={styles.View_2_563} />
          <View style={styles.View_2_564} />
          <View style={styles.View_2_565}>
            <Text style={styles.Text_2_565}>
              Protocols apart from aengage models, pricing billing
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/237b/c93f/3f42cd4e2d9d823f152609e64ca39f12"
            }}
            style={styles.ImageBackground_2_566}
          />
          <View style={styles.View_2_571}>
            <Text style={styles.Text_2_571}>Financial Planning System</Text>
          </View>
        </View>
        <View style={styles.View_2_572}>
          <View style={styles.View_2_573} />
          <View style={styles.View_2_574} />
          <View style={styles.View_2_575}>
            <Text style={styles.Text_2_575}>
              Protocols apart from aengage models, pricing billing
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f93a/5ada/c6e507909f7cd924382e9d77d2e3bea2"
            }}
            style={styles.ImageBackground_2_576}
          />
          <View style={styles.View_2_581}>
            <Text style={styles.Text_2_581}>Market Analysis Project</Text>
          </View>
        </View>
        <View style={styles.View_2_582}>
          <View style={styles.View_2_583} />
          <View style={styles.View_2_584} />
          <View style={styles.View_2_585}>
            <Text style={styles.Text_2_585}>
              Communication protocols apart from engagement models
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7578/3725/814172d629c63c7d311f37fb0f9bbaa3"
            }}
            style={styles.ImageBackground_2_586}
          />
          <View style={styles.View_2_591}>
            <Text style={styles.Text_2_591}>Development Website and App</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_649}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c614/b635/f28ed4288a0e82932cafb76bb1d8a3fc"
          }}
          style={styles.ImageBackground_2_508}
        />
        <View style={styles.View_2_547} />
        <View style={styles.View_2_548}>
          <Text style={styles.Text_2_548}>
            Our Business Plan is a written document describing a company&#39;s
            core business activites, Objectives, and how it plans to achieve its
            goals. Our goal is to provide our client high quality Product with
            modern idea accordingly their budgets and according thir
            reuirements.
          </Text>
        </View>
        <View style={styles.View_2_549}>
          <View style={styles.View_2_550}>
            <Text style={styles.Text_2_550}>
              Great Digital Product Agency since 2016{" "}
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a95/2511/10e24cd55f73fe8052a56ef2947c039e"
          }}
          style={styles.ImageBackground_2_592}
        />
        <View style={styles.View_2_593}>
          <View style={styles.View_2_594} />
          <View style={styles.View_2_595}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8dd/026f/9f85a8d151b347ba2626b6782bddaa5b"
              }}
              style={styles.ImageBackground_2_596}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2_650}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e89/f4ac/633f8311a5fe247780cc1c8776032c19"
          }}
          style={styles.ImageBackground_2_78}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ce5/4688/d966dd18038902d422c9d2e3b4266952"
          }}
          style={styles.ImageBackground_2_160}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/366b/0668/436eb83490af3980adc58aaad91d4d92"
          }}
          style={styles.ImageBackground_2_509}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3a52/2b9d/39165dc2752fee83e1877b51e6cf157f"
          }}
          style={styles.ImageBackground_2_511}
        />
        <View style={styles.View_2_517}>
          <Text style={styles.Text_2_517}>
            Several selected clients, who already believe in our service.
          </Text>
        </View>
        <View style={styles.View_2_519}>
          <Text style={styles.Text_2_519}>What our happy client say</Text>
        </View>
        <View style={styles.View_2_598}>
          <View style={styles.View_2_599}>
            <Text style={styles.Text_2_599}>Matthew Paul</Text>
          </View>
          <View style={styles.View_2_600}>
            <Text style={styles.Text_2_600}>
              Perfect, very good job! Thank you for the amazing design and work.
              Really impressed with the high quality and quick turnaround time.
              Highly recommend.
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/453b/5f2a/93e5195fed87faa1884d299ec98b3522"
            }}
            style={styles.ImageBackground_2_601}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/6347/c170e5acc3013384a0cb9c9bac913b9f"
            }}
            style={styles.ImageBackground_2_602}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/6347/c170e5acc3013384a0cb9c9bac913b9f"
            }}
            style={styles.ImageBackground_2_603}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/6347/c170e5acc3013384a0cb9c9bac913b9f"
            }}
            style={styles.ImageBackground_2_604}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2685/6347/c170e5acc3013384a0cb9c9bac913b9f"
            }}
            style={styles.ImageBackground_2_605}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/341a/fe22/754352eda8f50c5e3ada770e88324667"
          }}
          style={styles.ImageBackground_2_606}
        />
      </View>
      <View style={styles.View_2_651}>
        <View style={styles.View_2_4}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/89c4/a2a2/9d0c9321defabe0ec8e09a9498f33d7d"
            }}
            style={styles.ImageBackground_2_5}
          />
        </View>
        <View style={styles.View_2_506} />
        <View style={styles.View_2_615} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c0bb/1375/a681fd9062b0db14f0653db7e79e7d66"
          }}
          style={styles.ImageBackground_2_616}
        />
        <View style={styles.View_2_617}>
          <View style={styles.View_2_618} />
          <View style={styles.View_2_619}>
            <Text style={styles.Text_2_619}>Enter your email address..</Text>
          </View>
          <View style={styles.View_2_620}>
            <View style={styles.View_2_621}>
              <Text style={styles.Text_2_621}>Contact Now</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_622}>
          <Text style={styles.Text_2_622}>
            I will update good news and promotion service not spam
          </Text>
        </View>
        <View style={styles.View_2_623}>
          <Text style={styles.Text_2_623}>Subscribe Newsletter</Text>
        </View>
      </View>
      <View style={styles.View_2_652}>
        <View style={styles.View_2_326}>
          <Text style={styles.Text_2_326}>A+ Studio</Text>
        </View>
        <View style={styles.View_2_327}>
          <Text style={styles.Text_2_327}>What We Do</Text>
        </View>
        <View style={styles.View_2_328}>
          <Text style={styles.Text_2_328}>Company</Text>
        </View>
        <View style={styles.View_2_329}>
          <Text style={styles.Text_2_329}>Support</Text>
        </View>
        <View style={styles.View_2_330}>
          <Text style={styles.Text_2_330}>Contact</Text>
        </View>
        <View style={styles.View_2_331}>
          <Text style={styles.Text_2_331}>
            Web Design App Design Social Media Manage Market Analysis Project
          </Text>
        </View>
        <View style={styles.View_2_332}>
          <Text style={styles.Text_2_332}>About Us Career Become Investor</Text>
        </View>
        <View style={styles.View_2_333}>
          <Text style={styles.Text_2_333}>FAQ Policy Business</Text>
        </View>
        <View style={styles.View_2_334}>
          <Text style={styles.Text_2_334}>WhatsApp Support 24</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1f8/29e8/dda42f02c1cc1122637ed29ab91126c5"
          }}
          style={styles.ImageBackground_2_624}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ae5/5da3/9193b43ac413a9edd88815beed45bee8"
          }}
          style={styles.ImageBackground_2_625}
        />
        <View style={styles.View_2_626}>
          <Text style={styles.Text_2_626}>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </Text>
        </View>
        <View style={styles.View_2_627}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd75/241d/30dba2f40211bb3ae1b91eaf918aeebd"
            }}
            style={styles.ImageBackground_2_628}
          />
        </View>
        <View style={styles.View_2_631}>
          <View style={styles.View_2_632}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe3b/9a71/3568341599617caaee92bab29f95d941"
              }}
              style={styles.ImageBackground_2_633}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7383/a85a/cea5486842639e0b817eebc2d473904f"
              }}
              style={styles.ImageBackground_2_634}
            />
          </View>
        </View>
        <View style={styles.View_2_636}>
          <View style={styles.View_2_637}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faad/5001/dd9767d5103ea94d4e9891f367394053"
              }}
              style={styles.ImageBackground_2_638}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ec1/2466/64dab39ec2430cfdf005b5b2d0381bd2"
              }}
              style={styles.ImageBackground_2_639}
            />
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_2_641} />
        <View style={styles.View_2_642}>
          <Text style={styles.Text_2_642}>Copyright © 2022 Avi Yansah</Text>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(254, 254, 254, 1)" },
  View_2: { height: hp("560%") },
  View_2_643: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("6%")
  },
  View_2_325: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_325: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22.14716911315918,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_335: {
    width: wp("45%"),
    minWidth: wp("45%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("1%")
  },
  View_2_336: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_336: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_2_337: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_337: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_2_338: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_338: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_2_339: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_339: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_2_340: {
    width: wp("2%"),
    minWidth: wp("2%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_340: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_2_341: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_341: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.16,
    textTransform: "none"
  },
  View_2_646: {
    width: wp("95%"),
    minWidth: wp("95%"),
    height: hp("83%"),
    minHeight: hp("83%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("16%")
  },
  View_2_644: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("48%")
  },
  ImageBackground_2_342: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%")
  },
  ImageBackground_2_423: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_504: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("59%"),
    backgroundColor: "rgba(255, 245, 219, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0
  },
  ImageBackground_2_507: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%")
  },
  ImageBackground_2_510: {
    width: wp("52%"),
    minWidth: wp("52%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 200
  },
  View_2_645: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("36%"),
    minHeight: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("17%")
  },
  View_2_512: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_512: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_513: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_2_513: {
    color: "rgba(86, 86, 86, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_514: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(38, 57, 237, 1)"
  },
  View_2_515: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_515: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.3,
    textTransform: "none"
  },
  View_2_647: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("104%")
  },
  View_2_516: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_2_516: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_518: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_518: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_520: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_521: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_524: {
    width: wp("12%"),
    height: hp("7%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  View_2_526: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_527: {
    width: wp("10%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_534: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  View_2_648: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("118%"),
    minHeight: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("134%")
  },
  ImageBackground_2_159: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("97%")
  },
  View_2_161: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("88%")
  },
  ImageBackground_2_162: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("0%")
  },
  ImageBackground_2_243: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_324: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("19%"),
    backgroundColor: "rgba(244, 249, 255, 1)",
    borderTopLeftRadius: 150,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_2_505: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41%"),
    backgroundColor: "rgba(255, 245, 219, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0
  },
  View_2_543: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("49%")
  },
  View_2_544: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_2_544: {
    color: "rgba(86, 86, 86, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_545: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_546: {
    width: wp("25%"),
    minWidth: wp("25%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_546: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_551: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("11%")
  },
  View_2_552: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 242, 242, 1)",
    borderWidth: 1
  },
  View_2_553: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%"),
    backgroundColor: "rgba(241, 247, 255, 1)"
  },
  View_2_554: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("38%"),
    justifyContent: "flex-start"
  },
  Text_2_554: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_555: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_2_561: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_2_561: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_562: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("0%")
  },
  View_2_563: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 242, 242, 1)",
    borderWidth: 1
  },
  View_2_564: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 247, 227, 1)"
  },
  View_2_565: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("38%"),
    justifyContent: "flex-start"
  },
  Text_2_565: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_566: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_2_571: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_2_571: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_572: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("56%")
  },
  View_2_573: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 242, 242, 1)",
    borderWidth: 1
  },
  View_2_574: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%"),
    backgroundColor: "rgba(222, 255, 238, 1)"
  },
  View_2_575: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("38%"),
    justifyContent: "flex-start"
  },
  Text_2_575: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_576: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_2_581: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_2_581: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_582: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("67%")
  },
  View_2_583: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(242, 242, 242, 1)",
    borderWidth: 1
  },
  View_2_584: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("5%"),
    backgroundColor: "rgba(255, 242, 248, 1)"
  },
  View_2_585: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("38%"),
    justifyContent: "flex-start"
  },
  Text_2_585: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_586: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_2_591: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("26%"),
    justifyContent: "flex-start"
  },
  Text_2_591: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_649: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("60%"),
    minHeight: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("273%")
  },
  ImageBackground_2_508: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("42%")
  },
  View_2_547: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("8%"),
    backgroundColor: "rgba(239, 241, 255, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0
  },
  View_2_548: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_2_548: {
    color: "rgba(86, 86, 86, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_549: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("11%")
  },
  View_2_550: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_550: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_592: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("51%"),
    minHeight: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_593: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_594: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_595: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_596: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_650: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("82%"),
    minHeight: hp("82%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("348%")
  },
  ImageBackground_2_78: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("23%")
  },
  ImageBackground_2_160: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("64%")
  },
  ImageBackground_2_509: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("43%")
  },
  ImageBackground_2_511: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("28%"),
    resizeMode: "cover",
    borderTopLeftRadius: 500,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 500,
    borderBottomRightRadius: 500
  },
  View_2_517: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_2_517: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_519: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_519: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_598: {
    width: wp("29%"),
    minWidth: wp("29%"),
    height: hp("25%"),
    minHeight: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("40%")
  },
  View_2_599: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_599: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_600: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_2_600: {
    color: "rgba(86, 86, 86, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_601: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%")
  },
  ImageBackground_2_602: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%")
  },
  ImageBackground_2_603: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("23%")
  },
  ImageBackground_2_604: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("23%")
  },
  ImageBackground_2_605: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("23%")
  },
  ImageBackground_2_606: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("28%")
  },
  View_2_651: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("53%"),
    minHeight: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("442%")
  },
  View_2_4: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("0%")
  },
  ImageBackground_2_5: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_506: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    backgroundColor: "rgba(255, 245, 219, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0
  },
  View_2_615: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("8%"),
    backgroundColor: "rgba(244, 249, 255, 1)"
  },
  ImageBackground_2_616: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("40%"),
    minHeight: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("8%")
  },
  View_2_617: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("22%")
  },
  View_2_618: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(241, 241, 241, 1)",
    borderWidth: 1
  },
  View_2_619: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_2_619: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_620: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("1%"),
    backgroundColor: "rgba(38, 57, 237, 1)"
  },
  View_2_621: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_621: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.04,
    textTransform: "none"
  },
  View_2_622: {
    width: wp("41%"),
    minWidth: wp("41%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("30%"),
    justifyContent: "flex-start"
  },
  Text_2_622: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_623: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("21%"),
    justifyContent: "flex-start"
  },
  Text_2_623: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_652: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("510%")
  },
  View_2_326: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_326: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_327: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_2_327: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_328: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_2_328: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_329: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_2_329: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_330: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_2_330: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_331: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_331: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_332: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_332: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_333: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_333: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_334: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_2_334: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_624: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_625: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%")
  },
  View_2_626: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_2_626: {
    color: "rgba(86, 86, 86, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_627: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_2_628: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_631: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_632: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_633: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_634: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_2_636: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_637: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_638: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_639: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_2_641: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("42%")
  },
  View_2_642: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_2_642: {
    color: "rgba(164, 164, 164, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
