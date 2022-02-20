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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/03fd/68d6/3d3ea35e0e3fcc2f50268c7d3b81b43a"
        }}
        style={styles.ImageBackground_118_2}
      />
      <View style={styles.View_108_660} />
      <View style={styles.View_105_5}>
        <View style={styles.View_115_661}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/225e/857e/49eec4877150f906130e8296fa5b5d49"
            }}
            style={styles.ImageBackground_115_662}
          />
        </View>
        <View style={styles.View_105_7}>
          <View style={styles.View_105_8}>
            <Text style={styles.Text_105_8}>Domů</Text>
          </View>
          <View style={styles.View_105_9}>
            <Text style={styles.Text_105_9}>Stěhování</Text>
          </View>
          <View style={styles.View_105_10}>
            <Text style={styles.Text_105_10}>Výbuchy</Text>
          </View>
          <View style={styles.View_105_12}>
            <Text style={styles.Text_105_12}>Ceny</Text>
          </View>
          <View style={styles.View_105_13}>
            <Text style={styles.Text_105_13}>Kontakt</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_105_14}>
        <View style={styles.View_105_15}>
          <View style={styles.View_138_1067}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1068}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1069}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1070}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1071}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1072}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1073}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1074}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1075}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1076}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1077}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1078}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1079}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1080}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1081}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1082}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1083}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1084}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1085}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1086}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1087}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1088}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1089}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1090}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1091}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1092}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1093}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1094}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1095}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1096}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1097}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1098}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1099}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1100}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1101}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1102}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1103}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1104}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1105}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1106}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1107}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1108}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1109}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1110}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1111}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1112}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1113}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1114}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1115}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1116}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1117}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1118}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1119}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1120}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1121}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1123}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1124}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1125}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1126}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1127}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1128}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1129}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1130}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1131}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1132}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1133}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1134}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1135}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1136}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1137}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1138}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1139}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1140}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1141}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1142}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1143}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1144}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1145}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1146}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8700/1b2c/113201420a867644273af24059b3d4f6"
              }}
              style={styles.ImageBackground_138_1147}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c625/e1cf/2b2b6d3550d46e4166d26cea6b7ef2ab"
              }}
              style={styles.ImageBackground_138_1148}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64ae/ecf8/838acd6421d21729d582ad72f38c3265"
            }}
            style={styles.ImageBackground_105_97}
          />
        </View>
        <View style={styles.View_105_178} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/197a/8a2c/8396587e3e209fec004908b5d6d0c335"
          }}
          style={styles.ImageBackground_105_179}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/15e1/acd4/84673434e080a80f179f2b818e548d53"
          }}
          style={styles.ImageBackground_105_180}
        />
        <View style={styles.View_105_181}>
          <View style={styles.View_105_182}>
            <Text style={styles.Text_105_182}>A Digital Product Agency</Text>
          </View>
          <View style={styles.View_105_183}>
            <Text style={styles.Text_105_183}>
              Leading digital agency with solid design and development
              expertise. We build readymade websites, mobile applications, and
              elaborate online business services.
            </Text>
          </View>
          <View style={styles.View_105_184}>
            <View style={styles.View_105_185}>
              <Text style={styles.Text_105_185}>Contact Now</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_105_212}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0de3/576c/92e7c5bcd3259e6f8b48b4fad348ba9c"
          }}
          style={styles.ImageBackground_105_213}
        />
        <View style={styles.View_105_214}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b76/c424/e09cacd147d0a2f4e1316f9a3af3aaab"
            }}
            style={styles.ImageBackground_105_215}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b76/c424/e09cacd147d0a2f4e1316f9a3af3aaab"
            }}
            style={styles.ImageBackground_105_296}
          />
        </View>
        <View style={styles.View_105_377} />
        <View style={styles.View_105_378} />
        <View style={styles.View_129_145} />
        <View style={styles.View_105_379}>
          <View style={styles.View_105_381}>
            <View style={styles.View_105_382}>
              <Text style={styles.Text_105_382}>
                How can we help your Business ?
              </Text>
            </View>
          </View>
          <View style={styles.View_105_380}>
            <Text style={styles.Text_105_380}>
              We build readymade websites, mobile applications, and elaborate
              online business services.
            </Text>
          </View>
        </View>
        <View style={styles.View_105_383}>
          <View style={styles.View_105_384} />
          <View style={styles.View_105_385} />
          <View style={styles.View_105_386}>
            <Text style={styles.Text_105_386}>
              We present you a proposal and discuss niffty-gritty like
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0df/156f/4717a5d9de5cc56b2d21f28bcb92e7df"
            }}
            style={styles.ImageBackground_105_387}
          />
          <View style={styles.View_105_393}>
            <Text style={styles.Text_105_393}>Business Idea Planning</Text>
          </View>
        </View>
        <View style={styles.View_138_974}>
          <View style={styles.View_138_975} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f84c/3eea/3c79c37ee36b6b4855da06be5d9fcdd8"
            }}
            style={styles.ImageBackground_138_976}
          />
          <View style={styles.View_138_977}>
            <Text style={styles.Text_138_977}>
              Protocols apart from aengage models, pricing billing
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/64b8/cbb7/892986fe8c79345471bd7458f5d27272"
            }}
            style={styles.ImageBackground_124_113}
          />
          <View style={styles.View_138_984}>
            <Text style={styles.Text_138_984}>Financial Planning System</Text>
          </View>
        </View>
        <View style={styles.View_105_404}>
          <View style={styles.View_105_405} />
          <View style={styles.View_105_407}>
            <Text style={styles.Text_105_407}>
              Protocols apart from aengage models, pricing billing
            </Text>
          </View>
          <View style={styles.View_105_413}>
            <Text style={styles.Text_105_413}>Market Analysis Project</Text>
          </View>
          <View style={styles.View_105_406} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1cfe/ce98/bd81e4c33306b156ab9fb2074b9c6435"
            }}
            style={styles.ImageBackground_126_116}
          />
        </View>
        <View style={styles.View_105_414}>
          <View style={styles.View_105_415} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e04b/5edd/99370fb381d1693101847f7f24cf9577"
            }}
            style={styles.ImageBackground_124_110}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/524c/c7dc/2004ec0b25b10dd3f0af4090b711a1b2"
            }}
            style={styles.ImageBackground_124_106}
          />
          <View style={styles.View_105_417}>
            <Text style={styles.Text_105_417}>
              Communication protocols apart from engagement models
            </Text>
          </View>
          <View style={styles.View_105_423}>
            <Text style={styles.Text_105_423}>Development Website and App</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_105_424}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c614/b635/f28ed4288a0e82932cafb76bb1d8a3fc"
          }}
          style={styles.ImageBackground_105_425}
        />
        <View style={styles.View_105_426} />
        <View style={styles.View_105_427}>
          <Text style={styles.Text_105_427}>
            Our Business Plan is a written document describing a company&#39;s
            core business activites, Objectives, and how it plans to achieve its
            goals. Our goal is to provide our client high quality Product with
            modern idea accordingly their budgets and according thir
            reuirements.
          </Text>
        </View>
        <View style={styles.View_105_428}>
          <View style={styles.View_105_429}>
            <Text style={styles.Text_105_429}>
              Great Digital Product Agency since 2016{" "}
            </Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a95/2511/10e24cd55f73fe8052a56ef2947c039e"
          }}
          style={styles.ImageBackground_105_430}
        />
        <View style={styles.View_105_431}>
          <View style={styles.View_105_432} />
          <View style={styles.View_105_433}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d8dd/026f/9f85a8d151b347ba2626b6782bddaa5b"
              }}
              style={styles.ImageBackground_105_434}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_105_436}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c402/e73c/53c7511e4af39de7e6bd63f5163f6f7e"
          }}
          style={styles.ImageBackground_105_437}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6704/e22c/bf2030168b4639cb96eabda5f7894d08"
          }}
          style={styles.ImageBackground_105_518}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7874/a676/57dfa0d34b898b3881d51dcf089dbc23"
          }}
          style={styles.ImageBackground_105_519}
        />
        <View style={styles.View_105_521}>
          <Text style={styles.Text_105_521}>
            Several selected clients, who already believe in our service.
          </Text>
        </View>
        <View style={styles.View_105_522}>
          <Text style={styles.Text_105_522}>What are our prices?</Text>
        </View>
      </View>
      <View style={styles.View_105_540}>
        <View style={styles.View_105_541}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c25/9ddd/857c74af886b6db8c831120b6b4305f6"
            }}
            style={styles.ImageBackground_105_542}
          />
        </View>
        <View style={styles.View_105_615} />
        <View style={styles.View_105_616} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd72/a4e7/7cbd50798ca717e7f0c520d447f8aba1"
          }}
          style={styles.ImageBackground_135_240}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8027/8a26/5093bc462c579601f261438ba9235e85"
          }}
          style={styles.ImageBackground_105_617}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5dad/b0e9/88d7597910c1e232e4a42bf9e9e55bac"
          }}
          style={styles.ImageBackground_136_22}
        />
        <View style={styles.View_105_618}>
          <View style={styles.View_105_619} />
          <View style={styles.View_105_620}>
            <Text style={styles.Text_105_620}>Enter your email address..</Text>
          </View>
          <View style={styles.View_105_621}>
            <View style={styles.View_105_622}>
              <Text style={styles.Text_105_622}>Contact Now</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_105_623}>
          <Text style={styles.Text_105_623}>
            I will update good news and promotion service not spam
          </Text>
        </View>
        <View style={styles.View_105_624}>
          <Text style={styles.Text_105_624}>Subscribe Newsletter</Text>
        </View>
      </View>
      <View style={styles.View_105_625}>
        <View style={styles.View_105_626}>
          <Text style={styles.Text_105_626}>A+ Studio</Text>
        </View>
        <View style={styles.View_105_627}>
          <Text style={styles.Text_105_627}>What We Do</Text>
        </View>
        <View style={styles.View_105_628}>
          <Text style={styles.Text_105_628}>Company</Text>
        </View>
        <View style={styles.View_105_629}>
          <Text style={styles.Text_105_629}>Support</Text>
        </View>
        <View style={styles.View_105_630}>
          <Text style={styles.Text_105_630}>Contact</Text>
        </View>
        <View style={styles.View_105_631}>
          <Text style={styles.Text_105_631}>
            Web Design App Design Social Media Manage Market Analysis Project
          </Text>
        </View>
        <View style={styles.View_105_632}>
          <Text style={styles.Text_105_632}>
            About Us Career Become Investor
          </Text>
        </View>
        <View style={styles.View_105_633}>
          <Text style={styles.Text_105_633}>FAQ Policy Business</Text>
        </View>
        <View style={styles.View_105_634}>
          <Text style={styles.Text_105_634}>WhatsApp Support 24</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d1f8/29e8/dda42f02c1cc1122637ed29ab91126c5"
          }}
          style={styles.ImageBackground_105_635}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1ae5/5da3/9193b43ac413a9edd88815beed45bee8"
          }}
          style={styles.ImageBackground_105_636}
        />
        <View style={styles.View_105_637}>
          <Text style={styles.Text_105_637}>
            Leading digital agency with solid design and development expertise.
            We build readymade websites, mobile applications, and elaborate
            online business services.
          </Text>
        </View>
        <View style={styles.View_105_638}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd75/241d/30dba2f40211bb3ae1b91eaf918aeebd"
            }}
            style={styles.ImageBackground_105_639}
          />
        </View>
        <View style={styles.View_105_642}>
          <View style={styles.View_105_643}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe3b/9a71/3568341599617caaee92bab29f95d941"
              }}
              style={styles.ImageBackground_105_644}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/abbc/c417/2a79e00c97e0c0519d8b5173ef7c8e40"
              }}
              style={styles.ImageBackground_105_645}
            />
          </View>
        </View>
        <View style={styles.View_105_647}>
          <View style={styles.View_105_648}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/faad/5001/dd9767d5103ea94d4e9891f367394053"
              }}
              style={styles.ImageBackground_105_649}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ec1/2466/64dab39ec2430cfdf005b5b2d0381bd2"
              }}
              style={styles.ImageBackground_105_650}
            />
          </View>
        </View>
        <View source={{ uri: "null" }} style={styles.View_105_652} />
        <View style={styles.View_105_653}>
          <Text style={styles.Text_105_653}>Copyright © 2022 Avi Yansah</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f08f/0ad8/c317dd66c625119649e4f0e6f209cf6d"
        }}
        style={styles.ImageBackground_122_10}
      />
      <View style={styles.View_137_382}>
        <View style={styles.View_137_391}>
          <View style={styles.View_137_393}>
            <View style={styles.View_I137_393_1_461}>
              <View style={styles.View_I137_393_1_461_1_520}>
                <Text style={styles.Text_I137_393_1_461_1_520}>D</Text>
              </View>
            </View>
            <View style={styles.View_I137_393_1_462}>
              <View style={styles.View_I137_393_1_462_1_537}>
                <View style={styles.View_I137_393_1_462_1_537_1_530}>
                  <View style={styles.View_I137_393_1_462_1_537_1_530_1_522}>
                    <View
                      style={styles.View_I137_393_1_462_1_537_1_530_1_522_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I137_393_1_462_1_537_1_530_1_522_1_520
                        }
                      >
                        Ctrl
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I137_393_1_462_1_537_1_531}>
                  <View style={styles.View_I137_393_1_462_1_537_1_531_1_524}>
                    <View
                      style={styles.View_I137_393_1_462_1_537_1_531_1_524_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I137_393_1_462_1_537_1_531_1_524_1_520
                        }
                      >
                        Alt
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_137_394}>
            <View style={styles.View_I137_394_1_461}>
              <View style={styles.View_I137_394_1_461_1_520}>
                <Text style={styles.Text_I137_394_1_461_1_520}>D</Text>
              </View>
            </View>
            <View style={styles.View_I137_394_1_462}>
              <View style={styles.View_I137_394_1_462_1_537}>
                <View style={styles.View_I137_394_1_462_1_537_1_530}>
                  <View style={styles.View_I137_394_1_462_1_537_1_530_1_522}>
                    <View
                      style={styles.View_I137_394_1_462_1_537_1_530_1_522_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I137_394_1_462_1_537_1_530_1_522_1_520
                        }
                      >
                        Ctrl
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I137_394_1_462_1_537_1_531}>
                  <View style={styles.View_I137_394_1_462_1_537_1_531_1_524}>
                    <View
                      style={styles.View_I137_394_1_462_1_537_1_531_1_524_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I137_394_1_462_1_537_1_531_1_524_1_520
                        }
                      >
                        Alt
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_137_395}>
            <View style={styles.View_I137_395_1_461}>
              <View style={styles.View_I137_395_1_461_1_520}>
                <Text style={styles.Text_I137_395_1_461_1_520}>D</Text>
              </View>
            </View>
            <View style={styles.View_I137_395_1_462}>
              <View style={styles.View_I137_395_1_462_1_537}>
                <View style={styles.View_I137_395_1_462_1_537_1_530}>
                  <View style={styles.View_I137_395_1_462_1_537_1_530_1_522}>
                    <View
                      style={styles.View_I137_395_1_462_1_537_1_530_1_522_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I137_395_1_462_1_537_1_530_1_522_1_520
                        }
                      >
                        Ctrl
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I137_395_1_462_1_537_1_531}>
                  <View style={styles.View_I137_395_1_462_1_537_1_531_1_524}>
                    <View
                      style={styles.View_I137_395_1_462_1_537_1_531_1_524_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I137_395_1_462_1_537_1_531_1_524_1_520
                        }
                      >
                        Alt
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_137_396}>
            <View style={styles.View_I137_396_1_461}>
              <View style={styles.View_I137_396_1_461_1_520}>
                <Text style={styles.Text_I137_396_1_461_1_520}>D</Text>
              </View>
            </View>
            <View style={styles.View_I137_396_1_462}>
              <View style={styles.View_I137_396_1_462_1_537}>
                <View style={styles.View_I137_396_1_462_1_537_1_530}>
                  <View style={styles.View_I137_396_1_462_1_537_1_530_1_522}>
                    <View
                      style={styles.View_I137_396_1_462_1_537_1_530_1_522_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I137_396_1_462_1_537_1_530_1_522_1_520
                        }
                      >
                        Ctrl
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I137_396_1_462_1_537_1_531}>
                  <View style={styles.View_I137_396_1_462_1_537_1_531_1_524}>
                    <View
                      style={styles.View_I137_396_1_462_1_537_1_531_1_524_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I137_396_1_462_1_537_1_531_1_524_1_520
                        }
                      >
                        Alt
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_137_397}>
            <View style={styles.View_I137_397_1_461}>
              <View style={styles.View_I137_397_1_461_1_520}>
                <Text style={styles.Text_I137_397_1_461_1_520}>D</Text>
              </View>
            </View>
            <View style={styles.View_I137_397_1_462}>
              <View style={styles.View_I137_397_1_462_1_537}>
                <View style={styles.View_I137_397_1_462_1_537_1_530}>
                  <View style={styles.View_I137_397_1_462_1_537_1_530_1_522}>
                    <View
                      style={styles.View_I137_397_1_462_1_537_1_530_1_522_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I137_397_1_462_1_537_1_530_1_522_1_520
                        }
                      >
                        Ctrl
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I137_397_1_462_1_537_1_531}>
                  <View style={styles.View_I137_397_1_462_1_537_1_531_1_524}>
                    <View
                      style={styles.View_I137_397_1_462_1_537_1_531_1_524_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I137_397_1_462_1_537_1_531_1_524_1_520
                        }
                      >
                        Alt
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_137_398}>
            <View style={styles.View_I137_398_1_461}>
              <View style={styles.View_I137_398_1_461_1_520}>
                <Text style={styles.Text_I137_398_1_461_1_520}>D</Text>
              </View>
            </View>
            <View style={styles.View_I137_398_1_462}>
              <View style={styles.View_I137_398_1_462_1_537}>
                <View style={styles.View_I137_398_1_462_1_537_1_530}>
                  <View style={styles.View_I137_398_1_462_1_537_1_530_1_522}>
                    <View
                      style={styles.View_I137_398_1_462_1_537_1_530_1_522_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I137_398_1_462_1_537_1_530_1_522_1_520
                        }
                      >
                        Ctrl
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I137_398_1_462_1_537_1_531}>
                  <View style={styles.View_I137_398_1_462_1_537_1_531_1_524}>
                    <View
                      style={styles.View_I137_398_1_462_1_537_1_531_1_524_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I137_398_1_462_1_537_1_531_1_524_1_520
                        }
                      >
                        Alt
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_138_775}>
          <View style={styles.View_138_777}>
            <View style={styles.View_I138_777_1_461}>
              <View style={styles.View_I138_777_1_461_1_520}>
                <Text style={styles.Text_I138_777_1_461_1_520}>D</Text>
              </View>
            </View>
            <View style={styles.View_I138_777_1_462}>
              <View style={styles.View_I138_777_1_462_1_537}>
                <View style={styles.View_I138_777_1_462_1_537_1_530}>
                  <View style={styles.View_I138_777_1_462_1_537_1_530_1_522}>
                    <View
                      style={styles.View_I138_777_1_462_1_537_1_530_1_522_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I138_777_1_462_1_537_1_530_1_522_1_520
                        }
                      >
                        Ctrl
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I138_777_1_462_1_537_1_531}>
                  <View style={styles.View_I138_777_1_462_1_537_1_531_1_524}>
                    <View
                      style={styles.View_I138_777_1_462_1_537_1_531_1_524_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I138_777_1_462_1_537_1_531_1_524_1_520
                        }
                      >
                        Alt
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_138_778}>
            <View style={styles.View_I138_778_1_461}>
              <View style={styles.View_I138_778_1_461_1_520}>
                <Text style={styles.Text_I138_778_1_461_1_520}>D</Text>
              </View>
            </View>
            <View style={styles.View_I138_778_1_462}>
              <View style={styles.View_I138_778_1_462_1_537}>
                <View style={styles.View_I138_778_1_462_1_537_1_530}>
                  <View style={styles.View_I138_778_1_462_1_537_1_530_1_522}>
                    <View
                      style={styles.View_I138_778_1_462_1_537_1_530_1_522_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I138_778_1_462_1_537_1_530_1_522_1_520
                        }
                      >
                        Ctrl
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I138_778_1_462_1_537_1_531}>
                  <View style={styles.View_I138_778_1_462_1_537_1_531_1_524}>
                    <View
                      style={styles.View_I138_778_1_462_1_537_1_531_1_524_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I138_778_1_462_1_537_1_531_1_524_1_520
                        }
                      >
                        Alt
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_138_779}>
            <View style={styles.View_I138_779_1_461}>
              <View style={styles.View_I138_779_1_461_1_520}>
                <Text style={styles.Text_I138_779_1_461_1_520}>D</Text>
              </View>
            </View>
            <View style={styles.View_I138_779_1_462}>
              <View style={styles.View_I138_779_1_462_1_537}>
                <View style={styles.View_I138_779_1_462_1_537_1_530}>
                  <View style={styles.View_I138_779_1_462_1_537_1_530_1_522}>
                    <View
                      style={styles.View_I138_779_1_462_1_537_1_530_1_522_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I138_779_1_462_1_537_1_530_1_522_1_520
                        }
                      >
                        Ctrl
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I138_779_1_462_1_537_1_531}>
                  <View style={styles.View_I138_779_1_462_1_537_1_531_1_524}>
                    <View
                      style={styles.View_I138_779_1_462_1_537_1_531_1_524_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I138_779_1_462_1_537_1_531_1_524_1_520
                        }
                      >
                        Alt
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_138_780}>
            <View style={styles.View_I138_780_1_461}>
              <View style={styles.View_I138_780_1_461_1_520}>
                <Text style={styles.Text_I138_780_1_461_1_520}>D</Text>
              </View>
            </View>
            <View style={styles.View_I138_780_1_462}>
              <View style={styles.View_I138_780_1_462_1_537}>
                <View style={styles.View_I138_780_1_462_1_537_1_530}>
                  <View style={styles.View_I138_780_1_462_1_537_1_530_1_522}>
                    <View
                      style={styles.View_I138_780_1_462_1_537_1_530_1_522_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I138_780_1_462_1_537_1_530_1_522_1_520
                        }
                      >
                        Ctrl
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I138_780_1_462_1_537_1_531}>
                  <View style={styles.View_I138_780_1_462_1_537_1_531_1_524}>
                    <View
                      style={styles.View_I138_780_1_462_1_537_1_531_1_524_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I138_780_1_462_1_537_1_531_1_524_1_520
                        }
                      >
                        Alt
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_138_781}>
            <View style={styles.View_I138_781_1_461}>
              <View style={styles.View_I138_781_1_461_1_520}>
                <Text style={styles.Text_I138_781_1_461_1_520}>D</Text>
              </View>
            </View>
            <View style={styles.View_I138_781_1_462}>
              <View style={styles.View_I138_781_1_462_1_537}>
                <View style={styles.View_I138_781_1_462_1_537_1_530}>
                  <View style={styles.View_I138_781_1_462_1_537_1_530_1_522}>
                    <View
                      style={styles.View_I138_781_1_462_1_537_1_530_1_522_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I138_781_1_462_1_537_1_530_1_522_1_520
                        }
                      >
                        Ctrl
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I138_781_1_462_1_537_1_531}>
                  <View style={styles.View_I138_781_1_462_1_537_1_531_1_524}>
                    <View
                      style={styles.View_I138_781_1_462_1_537_1_531_1_524_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I138_781_1_462_1_537_1_531_1_524_1_520
                        }
                      >
                        Alt
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_138_782}>
            <View style={styles.View_I138_782_1_461}>
              <View style={styles.View_I138_782_1_461_1_520}>
                <Text style={styles.Text_I138_782_1_461_1_520}>D</Text>
              </View>
            </View>
            <View style={styles.View_I138_782_1_462}>
              <View style={styles.View_I138_782_1_462_1_537}>
                <View style={styles.View_I138_782_1_462_1_537_1_530}>
                  <View style={styles.View_I138_782_1_462_1_537_1_530_1_522}>
                    <View
                      style={styles.View_I138_782_1_462_1_537_1_530_1_522_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I138_782_1_462_1_537_1_530_1_522_1_520
                        }
                      >
                        Ctrl
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.View_I138_782_1_462_1_537_1_531}>
                  <View style={styles.View_I138_782_1_462_1_537_1_531_1_524}>
                    <View
                      style={styles.View_I138_782_1_462_1_537_1_531_1_524_1_520}
                    >
                      <Text
                        style={
                          styles.Text_I138_782_1_462_1_537_1_531_1_524_1_520
                        }
                      >
                        Alt
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(41, 41, 41, 1)" },
  View_2: { height: hp("561%") },
  ImageBackground_118_2: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("200%")
  },
  View_108_660: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("90%"),
    minHeight: hp("90%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(24, 24, 24, 1)"
  },
  View_105_5: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("26%"),
    minHeight: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("6%")
  },
  View_115_661: {
    width: wp("26%"),
    minWidth: wp("26%"),
    height: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_115_662: {
    width: wp("24%"),
    height: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_105_7: {
    width: wp("48%"),
    minWidth: wp("48%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_105_8: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_105_8: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_105_9: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_105_9: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_105_10: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_105_10: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_105_12: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_105_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_105_13: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_105_13: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25,
    textTransform: "none"
  },
  View_105_14: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("74%"),
    minHeight: hp("74%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("27%")
  },
  View_105_15: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%")
  },
  View_138_1067: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("0%")
  },
  ImageBackground_138_1068: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_138_1069: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_138_1070: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%")
  },
  ImageBackground_138_1071: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%")
  },
  ImageBackground_138_1072: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%")
  },
  ImageBackground_138_1073: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%")
  },
  ImageBackground_138_1074: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  ImageBackground_138_1075: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%")
  },
  ImageBackground_138_1076: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_138_1077: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_138_1078: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("7%")
  },
  ImageBackground_138_1079: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%")
  },
  ImageBackground_138_1080: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("13%")
  },
  ImageBackground_138_1081: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("16%")
  },
  ImageBackground_138_1082: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("20%")
  },
  ImageBackground_138_1083: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("23%")
  },
  ImageBackground_138_1084: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_138_1085: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_138_1086: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%")
  },
  ImageBackground_138_1087: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("10%")
  },
  ImageBackground_138_1088: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%")
  },
  ImageBackground_138_1089: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("16%")
  },
  ImageBackground_138_1090: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("20%")
  },
  ImageBackground_138_1091: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("23%")
  },
  ImageBackground_138_1092: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  ImageBackground_138_1093: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%")
  },
  ImageBackground_138_1094: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("7%")
  },
  ImageBackground_138_1095: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("10%")
  },
  ImageBackground_138_1096: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("13%")
  },
  ImageBackground_138_1097: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("16%")
  },
  ImageBackground_138_1098: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("20%")
  },
  ImageBackground_138_1099: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%")
  },
  ImageBackground_138_1100: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_138_1101: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%")
  },
  ImageBackground_138_1102: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("7%")
  },
  ImageBackground_138_1103: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%")
  },
  ImageBackground_138_1104: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("13%")
  },
  ImageBackground_138_1105: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("16%")
  },
  ImageBackground_138_1106: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("20%")
  },
  ImageBackground_138_1107: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("23%")
  },
  ImageBackground_138_1108: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  ImageBackground_138_1109: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%")
  },
  ImageBackground_138_1110: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%")
  },
  ImageBackground_138_1111: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("10%")
  },
  ImageBackground_138_1112: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("13%")
  },
  ImageBackground_138_1113: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("16%")
  },
  ImageBackground_138_1114: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("20%")
  },
  ImageBackground_138_1115: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("23%")
  },
  ImageBackground_138_1116: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  ImageBackground_138_1117: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("3%")
  },
  ImageBackground_138_1118: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%")
  },
  ImageBackground_138_1119: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("10%")
  },
  ImageBackground_138_1120: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("13%")
  },
  ImageBackground_138_1121: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("16%")
  },
  ImageBackground_138_1122: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("20%")
  },
  ImageBackground_138_1123: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("23%")
  },
  ImageBackground_138_1124: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  ImageBackground_138_1125: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("3%")
  },
  ImageBackground_138_1126: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("7%")
  },
  ImageBackground_138_1127: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("10%")
  },
  ImageBackground_138_1128: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("13%")
  },
  ImageBackground_138_1129: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("16%")
  },
  ImageBackground_138_1130: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("20%")
  },
  ImageBackground_138_1131: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%")
  },
  ImageBackground_138_1132: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  },
  ImageBackground_138_1133: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("3%")
  },
  ImageBackground_138_1134: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("7%")
  },
  ImageBackground_138_1135: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("10%")
  },
  ImageBackground_138_1136: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("13%")
  },
  ImageBackground_138_1137: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("16%")
  },
  ImageBackground_138_1138: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("20%")
  },
  ImageBackground_138_1139: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("23%")
  },
  ImageBackground_138_1140: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  ImageBackground_138_1141: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%")
  },
  ImageBackground_138_1142: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%")
  },
  ImageBackground_138_1143: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("10%")
  },
  ImageBackground_138_1144: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("13%")
  },
  ImageBackground_138_1145: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("16%")
  },
  ImageBackground_138_1146: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("20%")
  },
  ImageBackground_138_1147: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("23%")
  },
  ImageBackground_138_1148: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%")
  },
  ImageBackground_105_97: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_105_178: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("46%"),
    backgroundColor: "rgba(132, 52, 34, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0
  },
  ImageBackground_105_179: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("4%")
  },
  ImageBackground_105_180: {
    width: wp("51%"),
    minWidth: wp("51%"),
    height: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("0%")
  },
  View_105_181: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%")
  },
  View_105_182: {
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
  Text_105_182: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_183: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_105_183: {
    color: "rgba(254, 254, 254, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_184: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("34%"),
    backgroundColor: "rgba(55, 130, 225, 1)"
  },
  View_105_185: {
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
  Text_105_185: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.3,
    textTransform: "none"
  },
  View_105_212: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("119%"),
    minHeight: hp("119%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("104%")
  },
  ImageBackground_105_213: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("96%")
  },
  View_105_214: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("87%")
  },
  ImageBackground_105_215: {
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
  ImageBackground_105_296: {
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
  View_105_377: {
    width: wp("73%"),
    minWidth: wp("73%"),
    height: hp("85%"),
    minHeight: hp("85%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("18%"),
    backgroundColor: "rgba(252, 217, 25, 1)",
    borderTopLeftRadius: 150,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_105_378: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    backgroundColor: "rgba(252, 217, 25, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0
  },
  View_129_145: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("65%"),
    backgroundColor: "rgba(37, 37, 37, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0
  },
  View_105_379: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%")
  },
  View_105_381: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_105_382: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_105_382: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_380: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_105_380: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_383: {
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
  View_105_384: {
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
  View_105_385: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("4%"),
    backgroundColor: "rgba(241, 247, 255, 1)"
  },
  View_105_386: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_105_386: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_105_387: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_105_393: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_105_393: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_974: {
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
  View_138_975: {
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
  ImageBackground_138_976: {
    width: wp("15%"),
    minWidth: wp("15%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%")
  },
  View_138_977: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_138_977: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_124_113: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%")
  },
  View_138_984: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("25%"),
    justifyContent: "flex-start"
  },
  Text_138_984: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_404: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("60%"),
    top: hp("55%")
  },
  View_105_405: {
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
  View_105_407: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("38%"),
    justifyContent: "flex-start"
  },
  Text_105_407: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_413: {
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
  Text_105_413: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_406: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(244, 255, 222, 1)"
  },
  ImageBackground_126_116: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("21%"),
    minHeight: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    resizeMode: "cover"
  },
  View_105_414: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%"),
    top: hp("66%")
  },
  View_105_415: {
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
  ImageBackground_124_110: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%")
  },
  ImageBackground_124_106: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_105_417: {
    width: wp("17%"),
    minWidth: wp("17%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("38%"),
    justifyContent: "flex-start"
  },
  Text_105_417: {
    color: "rgba(117, 117, 117, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_423: {
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
  Text_105_423: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_424: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("247%")
  },
  ImageBackground_105_425: {
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
  View_105_426: {
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
  View_105_427: {
    width: wp("37%"),
    minWidth: wp("37%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("27%"),
    justifyContent: "flex-start"
  },
  Text_105_427: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.05,
    textTransform: "none"
  },
  View_105_428: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("11%")
  },
  View_105_429: {
    width: wp("28%"),
    minWidth: wp("28%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_105_429: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 28,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_105_430: {
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
  View_105_431: {
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
  View_105_432: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_105_433: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_105_434: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_105_436: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    top: hp("314%")
  },
  ImageBackground_105_437: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("16%")
  },
  ImageBackground_105_518: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("78%")
  },
  ImageBackground_105_519: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("32%")
  },
  View_105_521: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_105_521: {
    color: "rgba(186, 186, 186, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_522: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_105_522: {
    color: "rgba(105, 126, 155, 1)",
    fontSize: 30,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_540: {
    width: wp("94%"),
    minWidth: wp("94%"),
    height: hp("102%"),
    minHeight: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("374%")
  },
  View_105_541: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("51%")
  },
  ImageBackground_105_542: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_105_615: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    backgroundColor: "rgba(226, 167, 66, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0
  },
  View_105_616: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(78, 77, 70, 1)"
  },
  ImageBackground_135_240: {
    width: wp("21%"),
    minWidth: wp("21%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("61%")
  },
  ImageBackground_105_617: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("60%")
  },
  ImageBackground_136_22: {
    width: wp("32%"),
    height: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    top: hp("52%")
  },
  View_105_618: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("73%")
  },
  View_105_619: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(241, 241, 241, 1)",
    borderWidth: 1
  },
  View_105_620: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_105_620: {
    color: "rgba(149, 149, 149, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_621: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("1%"),
    backgroundColor: "rgba(55, 130, 225, 1)"
  },
  View_105_622: {
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
  Text_105_622: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.04,
    textTransform: "none"
  },
  View_105_623: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("79%"),
    justifyContent: "flex-start"
  },
  Text_105_623: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_624: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_105_624: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_625: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("48%"),
    minHeight: hp("48%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("485%")
  },
  View_105_626: {
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
  Text_105_626: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_627: {
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
  Text_105_627: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_628: {
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
  Text_105_628: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_629: {
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
  Text_105_629: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_630: {
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
  Text_105_630: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_631: {
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
  Text_105_631: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_632: {
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
  Text_105_632: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_633: {
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
  Text_105_633: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_634: {
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
  Text_105_634: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_105_635: {
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
  ImageBackground_105_636: {
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
  View_105_637: {
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
  Text_105_637: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_105_638: {
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
  ImageBackground_105_639: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_105_642: {
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
  View_105_643: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_105_644: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_105_645: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_105_647: {
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
  View_105_648: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_105_649: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_105_650: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_105_652: {
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
  View_105_653: {
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
  Text_105_653: {
    color: "rgba(164, 164, 164, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_122_10: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("228%")
  },
  View_137_382: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("73%"),
    minHeight: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("337%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_137_391: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("73%"),
    minHeight: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_137_393: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 250, 255, 1)",
    overflow: "hidden"
  },
  View_I137_393_1_461: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_393_1_461_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_393_1_461_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_393_1_462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_393_1_462_1_537: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_393_1_462_1_537_1_530: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_393_1_462_1_537_1_530_1_522: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_393_1_462_1_537_1_530_1_522_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_393_1_462_1_537_1_530_1_522_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_393_1_462_1_537_1_531: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_393_1_462_1_537_1_531_1_524: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_393_1_462_1_537_1_531_1_524_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_393_1_462_1_537_1_531_1_524_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_137_394: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(248, 250, 255, 1)",
    overflow: "hidden"
  },
  View_I137_394_1_461: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_394_1_461_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_394_1_461_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_394_1_462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_394_1_462_1_537: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_394_1_462_1_537_1_530: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_394_1_462_1_537_1_530_1_522: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_394_1_462_1_537_1_530_1_522_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_394_1_462_1_537_1_530_1_522_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_394_1_462_1_537_1_531: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_394_1_462_1_537_1_531_1_524: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_394_1_462_1_537_1_531_1_524_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_394_1_462_1_537_1_531_1_524_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_137_395: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(248, 250, 255, 1)",
    overflow: "hidden"
  },
  View_I137_395_1_461: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_395_1_461_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_395_1_461_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_395_1_462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_395_1_462_1_537: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_395_1_462_1_537_1_530: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_395_1_462_1_537_1_530_1_522: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_395_1_462_1_537_1_530_1_522_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_395_1_462_1_537_1_530_1_522_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_395_1_462_1_537_1_531: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_395_1_462_1_537_1_531_1_524: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_395_1_462_1_537_1_531_1_524_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_395_1_462_1_537_1_531_1_524_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_137_396: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(248, 250, 255, 1)",
    overflow: "hidden"
  },
  View_I137_396_1_461: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_396_1_461_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_396_1_461_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_396_1_462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_396_1_462_1_537: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_396_1_462_1_537_1_530: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_396_1_462_1_537_1_530_1_522: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_396_1_462_1_537_1_530_1_522_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_396_1_462_1_537_1_530_1_522_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_396_1_462_1_537_1_531: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_396_1_462_1_537_1_531_1_524: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_396_1_462_1_537_1_531_1_524_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_396_1_462_1_537_1_531_1_524_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_137_397: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%"),
    backgroundColor: "rgba(248, 250, 255, 1)",
    overflow: "hidden"
  },
  View_I137_397_1_461: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_397_1_461_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_397_1_461_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_397_1_462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_397_1_462_1_537: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_397_1_462_1_537_1_530: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_397_1_462_1_537_1_530_1_522: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_397_1_462_1_537_1_530_1_522_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_397_1_462_1_537_1_530_1_522_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_397_1_462_1_537_1_531: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_397_1_462_1_537_1_531_1_524: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_397_1_462_1_537_1_531_1_524_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_397_1_462_1_537_1_531_1_524_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_137_398: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%"),
    backgroundColor: "rgba(248, 250, 255, 1)",
    overflow: "hidden"
  },
  View_I137_398_1_461: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_398_1_461_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_398_1_461_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_398_1_462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_398_1_462_1_537: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_398_1_462_1_537_1_530: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_398_1_462_1_537_1_530_1_522: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_398_1_462_1_537_1_530_1_522_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_398_1_462_1_537_1_530_1_522_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I137_398_1_462_1_537_1_531: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I137_398_1_462_1_537_1_531_1_524: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I137_398_1_462_1_537_1_531_1_524_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I137_398_1_462_1_537_1_531_1_524_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_775: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("73%"),
    minHeight: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_138_777: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(248, 250, 255, 1)",
    overflow: "hidden"
  },
  View_I138_777_1_461: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_777_1_461_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_777_1_461_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I138_777_1_462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_777_1_462_1_537: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_777_1_462_1_537_1_530: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_777_1_462_1_537_1_530_1_522: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_777_1_462_1_537_1_530_1_522_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_777_1_462_1_537_1_530_1_522_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I138_777_1_462_1_537_1_531: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_777_1_462_1_537_1_531_1_524: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_777_1_462_1_537_1_531_1_524_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_777_1_462_1_537_1_531_1_524_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_778: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(248, 250, 255, 1)",
    overflow: "hidden"
  },
  View_I138_778_1_461: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_778_1_461_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_778_1_461_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I138_778_1_462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_778_1_462_1_537: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_778_1_462_1_537_1_530: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_778_1_462_1_537_1_530_1_522: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_778_1_462_1_537_1_530_1_522_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_778_1_462_1_537_1_530_1_522_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I138_778_1_462_1_537_1_531: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_778_1_462_1_537_1_531_1_524: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_778_1_462_1_537_1_531_1_524_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_778_1_462_1_537_1_531_1_524_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_779: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("22%"),
    backgroundColor: "rgba(248, 250, 255, 1)",
    overflow: "hidden"
  },
  View_I138_779_1_461: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_779_1_461_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_779_1_461_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I138_779_1_462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_779_1_462_1_537: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_779_1_462_1_537_1_530: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_779_1_462_1_537_1_530_1_522: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_779_1_462_1_537_1_530_1_522_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_779_1_462_1_537_1_530_1_522_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I138_779_1_462_1_537_1_531: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_779_1_462_1_537_1_531_1_524: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_779_1_462_1_537_1_531_1_524_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_779_1_462_1_537_1_531_1_524_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_780: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(248, 250, 255, 1)",
    overflow: "hidden"
  },
  View_I138_780_1_461: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_780_1_461_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_780_1_461_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I138_780_1_462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_780_1_462_1_537: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_780_1_462_1_537_1_530: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_780_1_462_1_537_1_530_1_522: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_780_1_462_1_537_1_530_1_522_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_780_1_462_1_537_1_530_1_522_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I138_780_1_462_1_537_1_531: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_780_1_462_1_537_1_531_1_524: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_780_1_462_1_537_1_531_1_524_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_780_1_462_1_537_1_531_1_524_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_781: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%"),
    backgroundColor: "rgba(248, 250, 255, 1)",
    overflow: "hidden"
  },
  View_I138_781_1_461: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_781_1_461_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_781_1_461_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I138_781_1_462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_781_1_462_1_537: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_781_1_462_1_537_1_530: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_781_1_462_1_537_1_530_1_522: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_781_1_462_1_537_1_530_1_522_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_781_1_462_1_537_1_530_1_522_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I138_781_1_462_1_537_1_531: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_781_1_462_1_537_1_531_1_524: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_781_1_462_1_537_1_531_1_524_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_781_1_462_1_537_1_531_1_524_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_138_782: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("54%"),
    backgroundColor: "rgba(248, 250, 255, 1)",
    overflow: "hidden"
  },
  View_I138_782_1_461: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_782_1_461_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_782_1_461_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I138_782_1_462: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_782_1_462_1_537: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_782_1_462_1_537_1_530: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_782_1_462_1_537_1_530_1_522: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_782_1_462_1_537_1_530_1_522_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_782_1_462_1_537_1_530_1_522_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I138_782_1_462_1_537_1_531: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I138_782_1_462_1_537_1_531_1_524: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I138_782_1_462_1_537_1_531_1_524_1_520: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I138_782_1_462_1_537_1_531_1_524_1_520: {
    color: "rgba(36, 54, 89, 1)",
    fontSize: 10,
    fontWeight: "700",
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
