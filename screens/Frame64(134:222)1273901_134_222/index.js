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
      <View style={styles.View_134_223} />
      <View style={styles.View_134_225} />
      <View style={styles.View_136_25} />
      <View style={styles.View_136_31} />
      <View style={styles.View_136_32} />
      <View style={styles.View_136_33} />
      <View style={styles.View_136_34} />
      <View style={styles.View_136_35} />
      <View style={styles.View_136_36} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e574/95fe/9cf8a04dd0daf71c4f02679d26fad0b3"
        }}
        style={styles.ImageBackground_136_26}
      />
      <View style={styles.View_136_27} />
      <View style={styles.View_136_28} />
      <View style={styles.View_136_29} />
      <View style={styles.View_136_30} />
      <View style={styles.View_137_2}>
        <Text style={styles.Text_137_2}>Item 1</Text>
      </View>
      <View style={styles.View_136_11} />
      <View style={styles.View_134_227} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f60d/00de/b6c34d1aa7ee293408fcc35a84830d77"
        }}
        style={styles.ImageBackground_135_246}
      />
      <View style={styles.View_135_245}>
        <Text style={styles.Text_135_245}>Pricing</Text>
      </View>
      <View style={styles.View_136_24}>
        <Text style={styles.Text_136_24}>Hours</Text>
      </View>
      <View style={styles.View_134_149}>
        <View style={styles.View_134_150}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4eb7/1a62/2dbd6797bbc1425868ef282ccb978e35"
            }}
            style={styles.ImageBackground_134_151}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/11d8/c26e/545613ae6904602b299bb9186e6d4d6f"
            }}
            style={styles.ImageBackground_134_152}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/891b/fa6f/84ca88c3ff8eb46868854ca45b4186ee"
            }}
            style={styles.ImageBackground_134_154}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f02d/d0df/52fb8bcef30efb676c41832c02491d6d"
            }}
            style={styles.ImageBackground_134_155}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dd59/bd98/a47a73e652add9058df81317ffffbb00"
            }}
            style={styles.ImageBackground_134_156}
          />
          <View style={styles.View_134_157}>
            <Text style={styles.Text_134_157}>Pricing</Text>
          </View>
          <View style={styles.View_134_158}>
            <Text style={styles.Text_134_158}>Amnt.</Text>
          </View>
        </View>
        <View style={styles.View_134_159}>
          <Text style={styles.Text_134_159}>Teaser</Text>
        </View>
        <View style={styles.View_134_160}>
          <Text style={styles.Text_134_160}>Service</Text>
        </View>
        <View style={styles.View_134_161}>
          <Text style={styles.Text_134_161}>Teaser</Text>
        </View>
        <View style={styles.View_134_162}>
          <Text style={styles.Text_134_162}>Prize List </Text>
        </View>
        <View style={styles.View_134_163}>
          <Text style={styles.Text_134_163}>Question </Text>
        </View>
        <View style={styles.View_134_164}>
          <Text style={styles.Text_134_164}>Promotion</Text>
        </View>
        <View style={styles.View_134_165}>
          <Text style={styles.Text_134_165}>Winner </Text>
        </View>
        <View style={styles.View_134_166}>
          <Text style={styles.Text_134_166}>₹700</Text>
        </View>
        <View style={styles.View_134_167}>
          <Text style={styles.Text_134_167}>₹700</Text>
        </View>
        <View style={styles.View_134_168}>
          <Text style={styles.Text_134_168}>₹600</Text>
        </View>
        <View style={styles.View_134_169}>
          <Text style={styles.Text_134_169}>₹500</Text>
        </View>
        <View style={styles.View_134_170}>
          <Text style={styles.Text_134_170}>₹500</Text>
        </View>
        <View style={styles.View_134_171}>
          <Text style={styles.Text_134_171}>₹700</Text>
        </View>
        <View style={styles.View_134_172}>
          <Text style={styles.Text_134_172}>₹11,700</Text>
        </View>
        <View style={styles.View_134_173}>
          <Text style={styles.Text_134_173}>x 1</Text>
        </View>
        <View style={styles.View_134_174}>
          <Text style={styles.Text_134_174}>x 6</Text>
        </View>
        <View style={styles.View_134_175}>
          <Text style={styles.Text_134_175}>x 6</Text>
        </View>
        <View style={styles.View_134_176}>
          <Text style={styles.Text_134_176}>x 6</Text>
        </View>
        <View style={styles.View_134_177}>
          <Text style={styles.Text_134_177}>x 1</Text>
        </View>
        <View style={styles.View_134_178}>
          <Text style={styles.Text_134_178}>Thank You </Text>
        </View>
        <View style={styles.View_134_179}>
          <Text style={styles.Text_134_179}>Grand Total</Text>
        </View>
        <View source={{ uri: "null" }} style={styles.View_134_180} />
        <View source={{ uri: "null" }} style={styles.View_134_181} />
        <View source={{ uri: "null" }} style={styles.View_134_182} />
        <View source={{ uri: "null" }} style={styles.View_134_183} />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(222, 222, 222, 1)" },
  View_2: { height: hp("224%") },
  View_134_223: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("92%"),
    minHeight: hp("92%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("6%"),
    backgroundColor: "rgba(30, 30, 30, 1)",
    opacity: 0.9800000190734863
  },
  View_134_225: {
    width: wp("70%"),
    minWidth: wp("70%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("6%"),
    backgroundColor: "rgba(240, 206, 19, 1)",
    borderTopLeftRadius: 53,
    borderTopRightRadius: 53,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_136_25: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("27%"),
    backgroundColor: "rgba(115, 115, 115, 1)"
  },
  View_136_31: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("27%"),
    backgroundColor: "rgba(240, 206, 19, 1)"
  },
  View_136_32: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("38%"),
    backgroundColor: "rgba(240, 206, 19, 1)"
  },
  View_136_33: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("48%"),
    backgroundColor: "rgba(240, 206, 19, 1)"
  },
  View_136_34: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("59%"),
    backgroundColor: "rgba(240, 206, 19, 1)"
  },
  View_136_35: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("70%"),
    backgroundColor: "rgba(240, 206, 19, 1)"
  },
  View_136_36: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("81%"),
    backgroundColor: "rgba(240, 206, 19, 1)"
  },
  ImageBackground_136_26: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("38%")
  },
  View_136_27: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("48%"),
    backgroundColor: "rgba(240, 206, 19, 1)"
  },
  View_136_28: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("59%"),
    backgroundColor: "rgba(240, 206, 19, 1)"
  },
  View_136_29: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("70%"),
    backgroundColor: "rgba(240, 206, 19, 1)"
  },
  View_136_30: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("81%"),
    backgroundColor: "rgba(240, 206, 19, 1)"
  },
  View_137_2: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("31%"),
    justifyContent: "flex-start"
  },
  Text_137_2: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_136_11: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("6%"),
    backgroundColor: "rgba(246, 241, 225, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0
  },
  View_134_227: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("6%"),
    backgroundColor: "rgba(134, 131, 114, 1)",
    borderTopLeftRadius: 53,
    borderTopRightRadius: 53,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  ImageBackground_135_246: {
    width: wp("21%"),
    height: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("6%")
  },
  View_135_245: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_135_245: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 43,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_136_24: {
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_136_24: {
    color: "rgba(58, 58, 58, 1)",
    fontSize: 43,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_149: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("108%")
  },
  View_134_150: {
    width: wp("67%"),
    minWidth: wp("67%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_134_151: {
    width: wp("66%"),
    minWidth: wp("66%"),
    height: hp("88%"),
    minHeight: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_134_152: {
    width: wp("54%"),
    minWidth: wp("54%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_134_154: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%")
  },
  ImageBackground_134_155: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("5%")
  },
  ImageBackground_134_156: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("5%")
  },
  View_134_157: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("7%"),
    justifyContent: "flex-start"
  },
  Text_134_157: {
    color: "rgba(1, 1, 1, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_158: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_134_158: {
    color: "rgba(1, 1, 1, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_159: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("22%"),
    justifyContent: "flex-start"
  },
  Text_134_159: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_160: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_134_160: {
    color: "rgba(1, 1, 1, 1)",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_161: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("67%"),
    justifyContent: "flex-start"
  },
  Text_134_161: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_162: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("29%"),
    justifyContent: "flex-start"
  },
  Text_134_162: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_163: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("35%"),
    justifyContent: "flex-start"
  },
  Text_134_163: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_164: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_134_164: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_165: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_134_165: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_166: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_166: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_167: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("33%"),
    justifyContent: "flex-start"
  },
  Text_134_167: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_168: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("45%"),
    justifyContent: "flex-start"
  },
  Text_134_168: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_169: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("51%"),
    justifyContent: "flex-start"
  },
  Text_134_169: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_170: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("61%"),
    justifyContent: "flex-start"
  },
  Text_134_170: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_171: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("68%"),
    justifyContent: "flex-start"
  },
  Text_134_171: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_172: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_134_172: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_173: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_134_173: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_174: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_134_174: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_175: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("47%"),
    justifyContent: "flex-start"
  },
  Text_134_175: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_176: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("56%"),
    justifyContent: "flex-start"
  },
  Text_134_176: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_177: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_134_177: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_178: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("60%"),
    justifyContent: "flex-start"
  },
  Text_134_178: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_179: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_134_179: {
    color: "rgba(226, 167, 66, 1)",
    fontSize: 18,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_134_180: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("88%"),
    minHeight: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("2%")
  },
  View_134_181: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("88%"),
    minHeight: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("2%")
  },
  View_134_182: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("2%")
  },
  View_134_183: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
