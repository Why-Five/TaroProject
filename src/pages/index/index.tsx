import { View, Text } from '@tarojs/components';
import { AtButton } from 'taro-ui';

import 'taro-ui/dist/style/components/button.scss'; // 按需引入
import 'taro-ui/dist/style/index.scss';
import './index.scss';

export default function Index() {
  return (
    <View>
      <Text>Hello world!</Text>
      <AtButton type='primary'>I need Taro UI</AtButton>
      <Text>Taro UI 支持 Vue 了吗？</Text>
      <AtButton type='primary' circle>支持</AtButton>
      <Text>共建？</Text>
      <AtButton type='secondary' circle>来</AtButton>
    </View>
  );
}
