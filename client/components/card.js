import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { MaterialCommunityIcons, EvilIcons, Ionicons } from "@expo/vector-icons";
import moment from 'moment';


class Card extends Component {
  renderHeader(name, profileImage) {
    if (profileImage) {
      profileImage = { url: profileImage }
    }
    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Image source={ profileImage || require('../image/profile.jpg')} style={styles.headerImage} />
          <Text style={styles.headerName}>{name}</Text>
        </View>
        <View style={styles.headerRight}>
          <MaterialCommunityIcons style={styles.headerIcon} name='dots-horizontal' size={20} />
        </View>
      </View>
    )
  }

  renderImage(image) {
    console.log("url: " + image);
    return (
      <Image 
        style={{height: 200, width: null}}
        // style={{width: '100%', height: '100%'}}
        source={require('../image/test.png')}
        // resizeMode='contain'
      />
    );
  }

  renderLike() {
    return (
      <View style={styles.likeContainer}>
        <View style={styles.likeIconContainer}>
          <View style={styles.likeLeft}>
            <TouchableOpacity onPress={()=>alert("heart!")}>
              <EvilIcons name="heart" size={30} style={{ marginRight: 5 }}/>
            </TouchableOpacity>
            <EvilIcons name="comment" size={30} style={{ marginRight: 8 }}/>
            <Ionicons name="ios-send-outline" size={30} style={{ marginRight: 5 }}/>
          </View>
          <View style={styles.likeRight}>
            <Ionicons name="ios-bookmark-outline" size={24}/>
          </View>
        </View>
        <View style={styles.likeNum}>
          <Text style={{ fontWeight: 'bold', fontSize: 12 }}>좋아요 151,353개</Text>
        </View>
      </View>
    );
  }

  renderBody(context) {
    return (
      <View style={styles.bodyContainer}>
        <Text style={{ marginRight: 5 }}>{context}</Text>
      </View>
    );
  }

  renderComment(createdAt) {
    return (
      <View style={styles.commentContainer}>
        <Text style={{ fontSize: 12, color: 'gray' }}>댓글 5개 모두 보기</Text>
        <Text style={{ fontSize: 9, color: 'gray', marginTop: 4 }}>{moment(createdAt).format("MM월 DD일")}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          {this.renderHeader(this.props.item.username, this.props.item.profileImage)}
        </View>
        <View style={styles.photo}>
          {this.renderImage(this.props.item.image)}
        </View>
        {this.renderLike()}
        {this.renderBody(this.props.item.content)}
        {this.renderComment(this.props.item.createdAt)}
      </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingBottom: 7
  },
  header: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: 'white'
  },
  headerLeft: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 5
  },
  headerImage: {
    height: 35,
    width: 35,
    borderRadius: 100,
  },
  headerName: {
    marginLeft: 8,
  },
  headerRight: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 5
  },
  photo: {
    width: Dimensions.get('window').width,
    height: 360,
    backgroundColor: 'black',
    padding: 0
  },
  likeContainer: {
    flexDirection: 'column'
  },
  likeIconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    backgroundColor: 'white'
  },
  likeLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  likeRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 5,
  },
  likeNum: {
    backgroundColor: 'white',
    paddingLeft: 8
  },
  bodyContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,
  },
  commentContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 5,
    paddingBottom: 5,    
  }
});

export default Card;