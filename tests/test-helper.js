import Application from 'ember-qunit-layout-bugs/app';
import config from 'ember-qunit-layout-bugs/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';

setApplication(Application.create(config.APP));
setup(QUnit.assert);
start();
