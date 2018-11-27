import Vue from 'vue'
import buildWidget from 'vidget'
import test from './components/test'

buildWidget(test, Vue)

if (process.env.NODE_ENV === 'development') {
  // auto-run in dev mode
  window.vidget('#widget', {})
}
