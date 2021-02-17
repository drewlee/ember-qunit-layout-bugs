import Application from 'ember-qunit-layout-bugs/app';
import config from 'ember-qunit-layout-bugs/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
