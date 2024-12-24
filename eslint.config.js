// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...tseslint.configs.stylistic,
      ...angular.configs.tsRecommended,
    ],
    processor: angular.processInlineTemplates,
    rules: {
      "@angular-eslint/directive-selector": [
        "error",
        {
          type: "attribute",
          prefix: "app",
          style: "camelCase",
        },
      ],
      "@angular-eslint/component-selector": [
        "error",
        {
          type: "element",
          prefix: "app",
          style: "kebab-case",
        },
      ],
      '@angular-eslint/component-class-suffix': 'error',
			'@angular-eslint/contextual-lifecycle': 'error',
			'@angular-eslint/directive-class-suffix': 'error',
			'@angular-eslint/no-conflicting-lifecycle': 'error',
			'@angular-eslint/no-input-rename': 'off',
			'@angular-eslint/no-inputs-metadata-property': 'error',
			'@angular-eslint/no-output-native': 'error',
			'@angular-eslint/no-output-on-prefix': 'error',
			'@angular-eslint/no-output-rename': 'error',
			'@angular-eslint/no-outputs-metadata-property': 'error',
			'@angular-eslint/template/no-negated-async': 'off',
			'@angular-eslint/use-pipe-transform-interface': 'error',
			'@angular-eslint/no-empty-lifecycle-method': 'error',
			'@angular-eslint/use-lifecycle-interface': 'error',

			'@typescript-eslint/ban-ts-comment': 'warn',
			'@typescript-eslint/consistent-type-definitions': 'error',
			'@typescript-eslint/adjacent-overload-signatures': 'error',
			'@typescript-eslint/array-type': 'off',
			'@typescript-eslint/consistent-type-assertions': 'error',
			'no-unsafe-optional-chaining': 'error',
			'@typescript-eslint/explicit-function-return-type': [
				'error',
				{
					'allowExpressions': false,
					'allowTypedFunctionExpressions': true,
					'allowHigherOrderFunctions': true,
					'allowDirectConstAssertionInArrowFunctions': true,
					'allowConciseArrowFunctionExpressionsStartingWithVoid': false,
					'allowFunctionsWithoutTypeParameters': false,
					'allowIIFEs': false,
				},
			],
			'@typescript-eslint/explicit-module-boundary-types': [
				'error',
				{
					'allowArgumentsExplicitlyTypedAsAny': true,
					'allowDirectConstAssertionInArrowFunctions': true,
					'allowHigherOrderFunctions': true,
					'allowTypedFunctionExpressions': true,
				},
			],
			'@typescript-eslint/member-ordering': [
				'error',
				{
					'default': [
						'static-field',
						'instance-field',
						'static-method',
						'instance-method',
					],
				},
			],
			'@typescript-eslint/naming-convention': [
				'error',
				{
					'selector': 'variable',
					'format': ['camelCase', 'UPPER_CASE', 'PascalCase'],
					'leadingUnderscore': 'forbid',
					'trailingUnderscore': 'forbid',
				},
				{
					'selector': 'function',
					'format': ['camelCase', 'PascalCase'],
				},
				{
					'selector': 'enumMember',
					'format': ['PascalCase', 'camelCase', 'UPPER_CASE'],
				},
			],
			'@typescript-eslint/no-empty-function': 'off',
			'@typescript-eslint/no-empty-interface': 'error',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-inferrable-types': [
				'error',
				{
					'ignoreParameters': true,
				},
			],
			'@typescript-eslint/no-misused-new': 'error',
			'@typescript-eslint/no-namespace': 'error',
			'@typescript-eslint/no-non-null-assertion': 'error',
			'@typescript-eslint/no-parameter-properties': 'off',
			'@typescript-eslint/no-shadow': [
				'error',
				{
					'hoist': 'all',
				},
			],
			'@typescript-eslint/no-unused-expressions': [
				'error',
				{
					'allowShortCircuit': false,
					'allowTernary': true,
				},
			],
			'@typescript-eslint/no-use-before-define': 'off',
			'@typescript-eslint/no-var-requires': 'off',
			'@typescript-eslint/prefer-for-of': 'error',
			'@typescript-eslint/prefer-function-type': 'error',
			'@typescript-eslint/prefer-namespace-keyword': 'error',
			'@typescript-eslint/no-unused-vars': 'warn',
			'@typescript-eslint/triple-slash-reference': [
				'error',
				{
					'path': 'always',
					'types': 'prefer-import',
					'lib': 'always',
				},
			],
			'@typescript-eslint/typedef': [
				'error',
				{
					'arrayDestructuring': false,
					'arrowParameter': false,
					'memberVariableDeclaration': false,
					'objectDestructuring': false,
					'parameter': false,
					'propertyDeclaration': true,
					'variableDeclaration': false,
					'variableDeclarationIgnoreFunction': false,
				},
			],
			'@typescript-eslint/unified-signatures': 'error',

			'@typescript-eslint/no-empty-object-type': 'error',
			'@typescript-eslint/no-unsafe-function-type': 'error',
			'@typescript-eslint/no-wrapper-object-types': 'error',

			'no-useless-escape': 'off',
			'arrow-body-style': 'error',
			'complexity': 'off',
			'constructor-super': 'error',
			'curly': 'error',
			'dot-notation': 'off',
			'eol-last': 'error',
			'guard-for-in': 'error',
			'id-denylist': [
				'error',
				'any',
				'String',
				'string',
				'Boolean',
				'boolean',
				'Undefined',
				'undefined',
			],
			'id-match': 'error',
			'max-classes-per-file': 'off',
			'max-len': [
				'error',
				{
					'code': 160,
				},
			],
			'new-parens': 'error',
			'no-bitwise': 'error',
			'no-caller': 'error',
			'no-cond-assign': 'error',
			'no-console': [
				'error',
				{
					'allow': [
						'info',
						'warn',
						'timeLog',
						'count',
						'countReset',
						'group',
						'groupEnd',
						'table',
						'error',
						'groupCollapsed',
						'profile',
						'profileEnd',
						'timeStamp',
					],
				},
			],
			'no-debugger': 'error',
			'no-empty': 'off',
			'no-empty-function': 'off',
			'no-eval': 'error',
			'no-fallthrough': 'error',
			'no-invalid-this': 'off',
			'no-new-wrappers': 'error',
			'no-restricted-imports': [
				'error',
				'rxjs/Rx',
			],
			'no-shadow': 'off',
			'no-throw-literal': 'error',
			'no-trailing-spaces': 'error',
			'no-undef-init': 'error',
			'no-underscore-dangle': 'error',
			'no-unsafe-finally': 'error',
			'no-unused-expressions': 'off',
			'no-unused-labels': 'error',
			'no-use-before-define': 'off',
			'no-var': 'error',
			'object-shorthand': 'error',
			'one-var': [
				'error',
				'never',
			],
			'prefer-const': 'error',
			'quote-props': [
				'error',
				'as-needed',
			],
			'quotes': 'off',
			'radix': 'error',
			'semi': 'off',
			'space-before-function-paren': [
				'error',
				{
					'anonymous': 'never',
					'asyncArrow': 'always',
					'named': 'never',
				},
			],
			'spaced-comment': [
				'error',
				'always',
				{
					'markers': [
						'/',
					],
				},
			],
			'use-isnan': 'error',
			'valid-typeof': 'off',
			'no-irregular-whitespace': [
				'error', {
					'skipComments': true,
					'skipTemplates': true,
					'skipRegExps': true,
				},
			],
    },
  },
  {
    files: ["**/*.html"],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
    rules: {
      '@angular-eslint/template/elements-content': 'off',
			'@angular-eslint/template/click-events-have-key-events': 'off',
			'@angular-eslint/template/interactive-supports-focus': 'off',
			'@angular-eslint/template/label-has-associated-control': 'off',
			'@angular-eslint/template/mouse-events-have-key-events': 'off',
    },
  }
);
