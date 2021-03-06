define('frontend/tests/adapters/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - adapters');
  QUnit.test('adapters/application.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass jshint.');
  });
});
define('frontend/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('frontend/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('frontend/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/destroy-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('frontend/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'frontend/tests/helpers/start-app', 'frontend/tests/helpers/destroy-app'], function (exports, _qunit, _frontendTestsHelpersStartApp, _frontendTestsHelpersDestroyApp) {
  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _frontendTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        (0, _frontendTestsHelpersDestroyApp['default'])(this.application);

        if (options.afterEach) {
          options.afterEach.apply(this, arguments);
        }
      }
    });
  };
});
define('frontend/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/module-for-acceptance.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('frontend/tests/helpers/resolver', ['exports', 'frontend/resolver', 'frontend/config/environment'], function (exports, _frontendResolver, _frontendConfigEnvironment) {

  var resolver = _frontendResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _frontendConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _frontendConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('frontend/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('frontend/tests/helpers/start-app', ['exports', 'ember', 'frontend/app', 'frontend/config/environment'], function (exports, _ember, _frontendApp, _frontendConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _frontendConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _frontendApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('frontend/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/start-app.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('frontend/tests/helpers/truncate-description.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - helpers');
  QUnit.test('helpers/truncate-description.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/truncate-description.js should pass jshint.');
  });
});
define('frontend/tests/integration/books-index-test', ['exports', 'ember', 'qunit', 'frontend/tests/helpers/start-app'], function (exports, _ember, _qunit, _frontendTestsHelpersStartApp) {

  var App;

  (0, _qunit.module)('Books Index', {
    beforeEach: function beforeEach() {
      App = (0, _frontendTestsHelpersStartApp['default'])();
    },
    afterEach: function afterEach() {
      _ember['default'].run(App, 'destroy');
    }
  });

  (0, _qunit.test)('should show me a list of available books', function (assert) {
    visit('/books').then(function () {
      assert.equal(find('h1').text(), 'Favorite Books!');
    });
  });
});
define('frontend/tests/integration/books-index-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - integration');
  QUnit.test('integration/books-index-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/books-index-test.js should pass jshint.');
  });
});
define('frontend/tests/models/book.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - models');
  QUnit.test('models/book.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/book.js should pass jshint.');
  });
});
define('frontend/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('resolver.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('frontend/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('router.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('frontend/tests/routes/book.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/book.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/book.js should pass jshint.\nroutes/book.js: line 1, col 16, \'Ember\' is not defined.\n\n1 error');
  });
});
define('frontend/tests/routes/books.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - routes');
  QUnit.test('routes/books.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/books.js should pass jshint.\nroutes/books.js: line 1, col 16, \'Ember\' is not defined.\n\n1 error');
  });
});
define('frontend/tests/test-helper', ['exports', 'frontend/tests/helpers/resolver', 'ember-qunit'], function (exports, _frontendTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_frontendTestsHelpersResolver['default']);
});
define('frontend/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - .');
  QUnit.test('test-helper.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('frontend/tests/unit/helpers/truncate-description-test', ['exports', 'frontend/helpers/truncate-description', 'qunit'], function (exports, _frontendHelpersTruncateDescription, _qunit) {

  (0, _qunit.module)('Unit | Helper | truncate description');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _frontendHelpersTruncateDescription.truncateDescription)([42]);
    assert.ok(result);
  });
});
define('frontend/tests/unit/helpers/truncate-description-test.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint - unit/helpers');
  QUnit.test('unit/helpers/truncate-description-test.js should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/helpers/truncate-description-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map