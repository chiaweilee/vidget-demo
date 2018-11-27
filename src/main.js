import Vue from 'vue'
import vidget from 'vidget'
import test from './components/test'

vidget(test)

window.vidget('#widget', Vue)
