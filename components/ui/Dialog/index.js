/**
 * 对话框
 * 含标题，按钮区等
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableHighlight,
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import { UIComponent } from 'common';

import AnimateModal from '../AnimateModal';
import { tip, alert, confirm } from './tip';


const { maxHeight } = StyleSheet.create({
  maxHeight: {
    maxHeight: Dimensions.get('window').height,
  },
});

export default class Dialog extends UIComponent {
  static defaultProps = {
    visible: false,
    closable: false,
    maskClosable: false,
    animationType: 'fade',
    onClose() { },
    footer: [],
    fullScreen: false,
    animateAppear: true,
    operation: false,
    underlayColor: '#EEE',
    styleBtnMap: {
      no: { color: '#666' },
      yes: { color: '#337ab7' },
    },
  }

  static propTypes = {
    // 是否可见
    visible: PropTypes.bool,
    // 是否可关闭
    closable: PropTypes.bool,
    // 蒙层是否可关闭
    maskClosable: PropTypes.bool,
    // 动画类型
    animationType: PropTypes.string,
    // 关闭
    onClose: PropTypes.func,
    // 底部按钮数组
    footer: PropTypes.arrayOf(PropTypes.any),
    // 是否全屏
    fullScreen: PropTypes.bool,
    // 是否使用动画
    animateAppear: PropTypes.bool,
    // 一个特殊的按钮状态
    operation: PropTypes.bool,
    // 按钮点击颜色
    underlayColor: PropTypes.string,
    // 按钮类型
    styleBtnMap: PropTypes.objectOf(PropTypes.any),
  }

  /**
   * 简易的提示功能
   */
  static tip = tip
  static alert = alert
  static confirm = confirm
  static autoStyleSheet = false
  root = null
  _maskClose = () => {
    if (this.props.maskClosable && this.props.onClose) {
      this.props.onClose();
    }
  }

  _footerLayout = (e) => {
    if (this.root) {
      this.root.setNativeProps({
        style: [{ paddingBottom: e.nativeEvent.layout.height }, maxHeight],
      });
    }
  }

  _saveRoot = (root) => {
    this.root = root;
  }
  crtFullScreen(styles) {
    const {
      children, visible, animationType,
    } = this.props;
    let aniType = animationType;
    if (animationType === 'slide-up' || animationType === 'slide-down' || animationType === 'slide') {
      aniType = 'slide';
    }
    return (
      <View style={styles.container}>
        <AnimateModal
          visible={visible}
          animationType={aniType}
          onRequestClose={this._maskClose}
        >
          <View style={styles.body}>
            {children}
          </View>
        </AnimateModal>
      </View>
    );
  }

  crtClose(styles) {
    const { closable, onClose } = this.props;
    return closable ? (
      <View style={[styles.closeWrap]}>
        <TouchableWithoutFeedback onPress={onClose}>
          <View>
            <Text style={[styles.close]}>×</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    ) : null;
  }

  crtFooter(styles) {
    const {
      footer, onClose, operation, underlayColor, styleBtnMap,
    } = this.props;
    if (!footer || !footer.length) {
      return null;
    }
    let btnGroupStyle = styles.buttonGroupV;
    const borderRadius = styles.innerContent.borderRadius || 10;
    let horizontalFlex = {};
    let isHorizontal = false;
    if (footer && footer.length === 2 && !operation) {
      isHorizontal = true;
      btnGroupStyle = styles.buttonGroupH;
      horizontalFlex = { flex: 1 };
    }
    const buttonWrapStyle = footer && footer.length === 2 ? styles.buttonWrapH : styles.buttonWrapV;
    const footerButtons = footer.map((button, i) => {
      let buttonStyle = {};
      if (operation) {
        buttonStyle = styles.buttonTextOperation;
      }
      if (button.style) {
        buttonStyle = button.style;
        if (typeof buttonStyle === 'string') {
          buttonStyle = styleBtnMap[buttonStyle] || {};
        }
      }
      const noneBorder = footer && footer.length === 2 && i === 1 ? { borderRightWidth: 0 } : {};
      const onPressFn = () => {
        if (button.onPress) {
          button.onPress(button);
        }
        if (onClose) {
          onClose();
        }
      };
      let borderBottomLeftRadius;
      if (isHorizontal) {
        borderBottomLeftRadius = i === 0 ? borderRadius : 0;
      } else {
        borderBottomLeftRadius = i === footer.length - 1 ? borderRadius : 0;
      }
      const key = `th${i}`;
      return (
        <TouchableHighlight
          key={key}
          style={[horizontalFlex, {
            /* 修复安卓按钮按住高亮时，若容器有圆角，边角仍然溢出的bug */
            borderBottomLeftRadius,
            borderBottomRightRadius: i === footer.length - 1 ? borderRadius : 0,
          }]}
          underlayColor={underlayColor}
          onPress={onPressFn}
        >
          <View style={[buttonWrapStyle, noneBorder]}>
            <Text style={[styles.buttonText, buttonStyle]}>{button.text || ''}</Text>
          </View>
        </TouchableHighlight>
      );
    });
    return (
      <View style={[btnGroupStyle, styles.footer]} onLayout={this._footerLayout}>
        {footerButtons}
      </View>
    );
  }
  crtHeader(styles) {
    const { title } = this.props;
    return title ? <Text style={[styles.header]}>{title}</Text> : null;
  }
  render() {
    const styles = this.style;
    const {
      children, animateAppear, fullScreen, visible, onAnimationEnd, animationType, animationDuration,
    } = this.props;
    if (fullScreen) {
      return this.crtFullScreen(styles);
    }
    const headerEl = this.crtHeader(styles);
    const footerEl = this.crtFooter(styles);
    const closeEl = this.crtClose(styles);
    return (
      <View style={styles.container}>
        <AnimateModal
          onClose={this._maskClose}
          animationType={animationType}
          animationDuration={animationDuration}
          style={styles.inner}
          contentStyle={styles.innerContent}
          visible={visible}
          onAnimationEnd={onAnimationEnd}
          animateWhenMount={animateAppear}
        >
          <View style={maxHeight} ref={this._saveRoot}>
            {headerEl}
            <View style={styles.body}>{children}</View>
            {footerEl}
            {closeEl}
          </View>
        </AnimateModal>
      </View>
    );
  }
}

Dialog.baseStyle = {
  container: {
    zIndex: 1000,
  },
  // 内部样式 （即modal容器）
  inner: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // 内部内容区样式 （即modal内容区）
  innerContent: {
    borderRadius: 10,
    width: 270,
    overflow: 'hidden',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  header: {
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
    paddingTop: 20,
    paddingHorizontal: 22,
  },
  body: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 22,
  },
  maskClosable: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
  },
  closeWrap: {
    position: 'absolute',
    top: 0,
    left: 15,
  },
  close: {
    fontSize: 40,
    fontWeight: '200',
    color: '#bcbcbc',
    lineHeight: 44,
  },
  // 水平按钮组
  buttonGroupH: {
    flexGrow: 1,
    flexDirection: 'row',
  },
  // 垂直按钮组
  buttonGroupV: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  buttonWrapH: {
    flexGrow: 1,
    borderColor: '#EEE',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderRightWidth: StyleSheet.hairlineWidth,
    paddingVertical: 11,
  },
  buttonWrapV: {
    flexGrow: 1,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: '#EEE',
    paddingVertical: 11,
  },
  buttonText: {
    textAlign: 'center',
    color: '#0076FF',
    fontSize: 17,
    backgroundColor: 'transparent',
  },
  buttonTextOperation: {
    color: '#333',
    textAlign: 'left',
    paddingHorizontal: 15,
  },
};
