/**
 * Copyright 2017 Shape Security, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License")
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import * as Shift from 'shift-ast';

export default class LazyCloneReducer {
  reduceArrayAssignmentTarget(node, {elements, rest}) {
    if ((node.elements.length === elements.length && node.elements.every((v, i) => v === elements[i])) && node.rest === rest) {
      return node;
    }
    return new Shift.ArrayAssignmentTarget({elements, rest});
  }

  reduceArrayBinding(node, {elements, rest}) {
    if ((node.elements.length === elements.length && node.elements.every((v, i) => v === elements[i])) && node.rest === rest) {
      return node;
    }
    return new Shift.ArrayBinding({elements, rest});
  }

  reduceArrayExpression(node, {elements}) {
    if ((node.elements.length === elements.length && node.elements.every((v, i) => v === elements[i]))) {
      return node;
    }
    return new Shift.ArrayExpression({elements});
  }

  reduceArrowExpression(node, {params, body}) {
    if (node.params === params && node.body === body) {
      return node;
    }
    return new Shift.ArrowExpression({params, body});
  }

  reduceAssignmentExpression(node, {binding, expression}) {
    if (node.binding === binding && node.expression === expression) {
      return node;
    }
    return new Shift.AssignmentExpression({binding, expression});
  }

  reduceAssignmentTargetIdentifier(node) {
    return node;
  }

  reduceAssignmentTargetPropertyIdentifier(node, {binding, init}) {
    if (node.binding === binding && node.init === init) {
      return node;
    }
    return new Shift.AssignmentTargetPropertyIdentifier({binding, init});
  }

  reduceAssignmentTargetPropertyProperty(node, {name, binding}) {
    if (node.name === name && node.binding === binding) {
      return node;
    }
    return new Shift.AssignmentTargetPropertyProperty({name, binding});
  }

  reduceAssignmentTargetWithDefault(node, {binding, init}) {
    if (node.binding === binding && node.init === init) {
      return node;
    }
    return new Shift.AssignmentTargetWithDefault({binding, init});
  }

  reduceBinaryExpression(node, {left, right}) {
    if (node.left === left && node.right === right) {
      return node;
    }
    return new Shift.BinaryExpression({left, operator: node.operator, right});
  }

  reduceBindingIdentifier(node) {
    return node;
  }

  reduceBindingPropertyIdentifier(node, {binding, init}) {
    if (node.binding === binding && node.init === init) {
      return node;
    }
    return new Shift.BindingPropertyIdentifier({binding, init});
  }

  reduceBindingPropertyProperty(node, {name, binding}) {
    if (node.name === name && node.binding === binding) {
      return node;
    }
    return new Shift.BindingPropertyProperty({name, binding});
  }

  reduceBindingWithDefault(node, {binding, init}) {
    if (node.binding === binding && node.init === init) {
      return node;
    }
    return new Shift.BindingWithDefault({binding, init});
  }

  reduceBlock(node, {statements}) {
    if ((node.statements.length === statements.length && node.statements.every((v, i) => v === statements[i]))) {
      return node;
    }
    return new Shift.Block({statements});
  }

  reduceBlockStatement(node, {block}) {
    if (node.block === block) {
      return node;
    }
    return new Shift.BlockStatement({block});
  }

  reduceBreakStatement(node) {
    return node;
  }

  reduceCallExpression(node, {callee, arguments: _arguments}) {
    if (node.callee === callee && (node.arguments.length === _arguments.length && node.arguments.every((v, i) => v === _arguments[i]))) {
      return node;
    }
    return new Shift.CallExpression({callee, arguments: _arguments});
  }

  reduceCatchClause(node, {binding, body}) {
    if (node.binding === binding && node.body === body) {
      return node;
    }
    return new Shift.CatchClause({binding, body});
  }

  reduceClassDeclaration(node, {name, super: _super, elements}) {
    if (node.name === name && node.super === _super && (node.elements.length === elements.length && node.elements.every((v, i) => v === elements[i]))) {
      return node;
    }
    return new Shift.ClassDeclaration({name, super: _super, elements});
  }

  reduceClassElement(node, {method}) {
    if (node.method === method) {
      return node;
    }
    return new Shift.ClassElement({isStatic: node.isStatic, method});
  }

  reduceClassExpression(node, {name, super: _super, elements}) {
    if (node.name === name && node.super === _super && (node.elements.length === elements.length && node.elements.every((v, i) => v === elements[i]))) {
      return node;
    }
    return new Shift.ClassExpression({name, super: _super, elements});
  }

  reduceCompoundAssignmentExpression(node, {binding, expression}) {
    if (node.binding === binding && node.expression === expression) {
      return node;
    }
    return new Shift.CompoundAssignmentExpression({binding, operator: node.operator, expression});
  }

  reduceComputedMemberAssignmentTarget(node, {object, expression}) {
    if (node.object === object && node.expression === expression) {
      return node;
    }
    return new Shift.ComputedMemberAssignmentTarget({object, expression});
  }

  reduceComputedMemberExpression(node, {object, expression}) {
    if (node.object === object && node.expression === expression) {
      return node;
    }
    return new Shift.ComputedMemberExpression({object, expression});
  }

  reduceComputedPropertyName(node, {expression}) {
    if (node.expression === expression) {
      return node;
    }
    return new Shift.ComputedPropertyName({expression});
  }

  reduceConditionalExpression(node, {test, consequent, alternate}) {
    if (node.test === test && node.consequent === consequent && node.alternate === alternate) {
      return node;
    }
    return new Shift.ConditionalExpression({test, consequent, alternate});
  }

  reduceContinueStatement(node) {
    return node;
  }

  reduceDataProperty(node, {name, expression}) {
    if (node.name === name && node.expression === expression) {
      return node;
    }
    return new Shift.DataProperty({name, expression});
  }

  reduceDebuggerStatement(node) {
    return node;
  }

  reduceDirective(node) {
    return node;
  }

  reduceDoWhileStatement(node, {body, test}) {
    if (node.body === body && node.test === test) {
      return node;
    }
    return new Shift.DoWhileStatement({body, test});
  }

  reduceEmptyStatement(node) {
    return node;
  }

  reduceExport(node, {declaration}) {
    if (node.declaration === declaration) {
      return node;
    }
    return new Shift.Export({declaration});
  }

  reduceExportAllFrom(node) {
    return node;
  }

  reduceExportDefault(node, {body}) {
    if (node.body === body) {
      return node;
    }
    return new Shift.ExportDefault({body});
  }

  reduceExportFrom(node, {namedExports}) {
    if ((node.namedExports.length === namedExports.length && node.namedExports.every((v, i) => v === namedExports[i]))) {
      return node;
    }
    return new Shift.ExportFrom({namedExports, moduleSpecifier: node.moduleSpecifier});
  }

  reduceExportFromSpecifier(node) {
    return node;
  }

  reduceExportLocalSpecifier(node, {name}) {
    if (node.name === name) {
      return node;
    }
    return new Shift.ExportLocalSpecifier({name, exportedName: node.exportedName});
  }

  reduceExportLocals(node, {namedExports}) {
    if ((node.namedExports.length === namedExports.length && node.namedExports.every((v, i) => v === namedExports[i]))) {
      return node;
    }
    return new Shift.ExportLocals({namedExports});
  }

  reduceExpressionStatement(node, {expression}) {
    if (node.expression === expression) {
      return node;
    }
    return new Shift.ExpressionStatement({expression});
  }

  reduceForInStatement(node, {left, right, body}) {
    if (node.left === left && node.right === right && node.body === body) {
      return node;
    }
    return new Shift.ForInStatement({left, right, body});
  }

  reduceForOfStatement(node, {left, right, body}) {
    if (node.left === left && node.right === right && node.body === body) {
      return node;
    }
    return new Shift.ForOfStatement({left, right, body});
  }

  reduceForStatement(node, {init, test, update, body}) {
    if (node.init === init && node.test === test && node.update === update && node.body === body) {
      return node;
    }
    return new Shift.ForStatement({init, test, update, body});
  }

  reduceFormalParameters(node, {items, rest}) {
    if ((node.items.length === items.length && node.items.every((v, i) => v === items[i])) && node.rest === rest) {
      return node;
    }
    return new Shift.FormalParameters({items, rest});
  }

  reduceFunctionBody(node, {directives, statements}) {
    if ((node.directives.length === directives.length && node.directives.every((v, i) => v === directives[i])) && (node.statements.length === statements.length && node.statements.every((v, i) => v === statements[i]))) {
      return node;
    }
    return new Shift.FunctionBody({directives, statements});
  }

  reduceFunctionDeclaration(node, {name, params, body}) {
    if (node.name === name && node.params === params && node.body === body) {
      return node;
    }
    return new Shift.FunctionDeclaration({isGenerator: node.isGenerator, name, params, body});
  }

  reduceFunctionExpression(node, {name, params, body}) {
    if (node.name === name && node.params === params && node.body === body) {
      return node;
    }
    return new Shift.FunctionExpression({isGenerator: node.isGenerator, name, params, body});
  }

  reduceGetter(node, {name, body}) {
    if (node.name === name && node.body === body) {
      return node;
    }
    return new Shift.Getter({name, body});
  }

  reduceIdentifierExpression(node) {
    return node;
  }

  reduceIfStatement(node, {test, consequent, alternate}) {
    if (node.test === test && node.consequent === consequent && node.alternate === alternate) {
      return node;
    }
    return new Shift.IfStatement({test, consequent, alternate});
  }

  reduceImport(node, {defaultBinding, namedImports}) {
    if (node.defaultBinding === defaultBinding && (node.namedImports.length === namedImports.length && node.namedImports.every((v, i) => v === namedImports[i]))) {
      return node;
    }
    return new Shift.Import({defaultBinding, namedImports, moduleSpecifier: node.moduleSpecifier});
  }

  reduceImportNamespace(node, {defaultBinding, namespaceBinding}) {
    if (node.defaultBinding === defaultBinding && node.namespaceBinding === namespaceBinding) {
      return node;
    }
    return new Shift.ImportNamespace({defaultBinding, namespaceBinding, moduleSpecifier: node.moduleSpecifier});
  }

  reduceImportSpecifier(node, {binding}) {
    if (node.binding === binding) {
      return node;
    }
    return new Shift.ImportSpecifier({name: node.name, binding});
  }

  reduceLabeledStatement(node, {body}) {
    if (node.body === body) {
      return node;
    }
    return new Shift.LabeledStatement({label: node.label, body});
  }

  reduceLiteralBooleanExpression(node) {
    return node;
  }

  reduceLiteralInfinityExpression(node) {
    return node;
  }

  reduceLiteralNullExpression(node) {
    return node;
  }

  reduceLiteralNumericExpression(node) {
    return node;
  }

  reduceLiteralRegExpExpression(node) {
    return node;
  }

  reduceLiteralStringExpression(node) {
    return node;
  }

  reduceMethod(node, {name, params, body}) {
    if (node.name === name && node.params === params && node.body === body) {
      return node;
    }
    return new Shift.Method({isGenerator: node.isGenerator, name, params, body});
  }

  reduceModule(node, {directives, items}) {
    if ((node.directives.length === directives.length && node.directives.every((v, i) => v === directives[i])) && (node.items.length === items.length && node.items.every((v, i) => v === items[i]))) {
      return node;
    }
    return new Shift.Module({directives, items});
  }

  reduceNewExpression(node, {callee, arguments: _arguments}) {
    if (node.callee === callee && (node.arguments.length === _arguments.length && node.arguments.every((v, i) => v === _arguments[i]))) {
      return node;
    }
    return new Shift.NewExpression({callee, arguments: _arguments});
  }

  reduceNewTargetExpression(node) {
    return node;
  }

  reduceObjectAssignmentTarget(node, {properties}) {
    if ((node.properties.length === properties.length && node.properties.every((v, i) => v === properties[i]))) {
      return node;
    }
    return new Shift.ObjectAssignmentTarget({properties});
  }

  reduceObjectBinding(node, {properties}) {
    if ((node.properties.length === properties.length && node.properties.every((v, i) => v === properties[i]))) {
      return node;
    }
    return new Shift.ObjectBinding({properties});
  }

  reduceObjectExpression(node, {properties}) {
    if ((node.properties.length === properties.length && node.properties.every((v, i) => v === properties[i]))) {
      return node;
    }
    return new Shift.ObjectExpression({properties});
  }

  reduceReturnStatement(node, {expression}) {
    if (node.expression === expression) {
      return node;
    }
    return new Shift.ReturnStatement({expression});
  }

  reduceScript(node, {directives, statements}) {
    if ((node.directives.length === directives.length && node.directives.every((v, i) => v === directives[i])) && (node.statements.length === statements.length && node.statements.every((v, i) => v === statements[i]))) {
      return node;
    }
    return new Shift.Script({directives, statements});
  }

  reduceSetter(node, {name, param, body}) {
    if (node.name === name && node.param === param && node.body === body) {
      return node;
    }
    return new Shift.Setter({name, param, body});
  }

  reduceShorthandProperty(node, {name}) {
    if (node.name === name) {
      return node;
    }
    return new Shift.ShorthandProperty({name});
  }

  reduceSpreadElement(node, {expression}) {
    if (node.expression === expression) {
      return node;
    }
    return new Shift.SpreadElement({expression});
  }

  reduceStaticMemberAssignmentTarget(node, {object}) {
    if (node.object === object) {
      return node;
    }
    return new Shift.StaticMemberAssignmentTarget({object, property: node.property});
  }

  reduceStaticMemberExpression(node, {object}) {
    if (node.object === object) {
      return node;
    }
    return new Shift.StaticMemberExpression({object, property: node.property});
  }

  reduceStaticPropertyName(node) {
    return node;
  }

  reduceSuper(node) {
    return node;
  }

  reduceSwitchCase(node, {test, consequent}) {
    if (node.test === test && (node.consequent.length === consequent.length && node.consequent.every((v, i) => v === consequent[i]))) {
      return node;
    }
    return new Shift.SwitchCase({test, consequent});
  }

  reduceSwitchDefault(node, {consequent}) {
    if ((node.consequent.length === consequent.length && node.consequent.every((v, i) => v === consequent[i]))) {
      return node;
    }
    return new Shift.SwitchDefault({consequent});
  }

  reduceSwitchStatement(node, {discriminant, cases}) {
    if (node.discriminant === discriminant && (node.cases.length === cases.length && node.cases.every((v, i) => v === cases[i]))) {
      return node;
    }
    return new Shift.SwitchStatement({discriminant, cases});
  }

  reduceSwitchStatementWithDefault(node, {discriminant, preDefaultCases, defaultCase, postDefaultCases}) {
    if (node.discriminant === discriminant && (node.preDefaultCases.length === preDefaultCases.length && node.preDefaultCases.every((v, i) => v === preDefaultCases[i])) && node.defaultCase === defaultCase && (node.postDefaultCases.length === postDefaultCases.length && node.postDefaultCases.every((v, i) => v === postDefaultCases[i]))) {
      return node;
    }
    return new Shift.SwitchStatementWithDefault({discriminant, preDefaultCases, defaultCase, postDefaultCases});
  }

  reduceTemplateElement(node) {
    return node;
  }

  reduceTemplateExpression(node, {tag, elements}) {
    if (node.tag === tag && (node.elements.length === elements.length && node.elements.every((v, i) => v === elements[i]))) {
      return node;
    }
    return new Shift.TemplateExpression({tag, elements});
  }

  reduceThisExpression(node) {
    return node;
  }

  reduceThrowStatement(node, {expression}) {
    if (node.expression === expression) {
      return node;
    }
    return new Shift.ThrowStatement({expression});
  }

  reduceTryCatchStatement(node, {body, catchClause}) {
    if (node.body === body && node.catchClause === catchClause) {
      return node;
    }
    return new Shift.TryCatchStatement({body, catchClause});
  }

  reduceTryFinallyStatement(node, {body, catchClause, finalizer}) {
    if (node.body === body && node.catchClause === catchClause && node.finalizer === finalizer) {
      return node;
    }
    return new Shift.TryFinallyStatement({body, catchClause, finalizer});
  }

  reduceUnaryExpression(node, {operand}) {
    if (node.operand === operand) {
      return node;
    }
    return new Shift.UnaryExpression({operator: node.operator, operand});
  }

  reduceUpdateExpression(node, {operand}) {
    if (node.operand === operand) {
      return node;
    }
    return new Shift.UpdateExpression({isPrefix: node.isPrefix, operator: node.operator, operand});
  }

  reduceVariableDeclaration(node, {declarators}) {
    if ((node.declarators.length === declarators.length && node.declarators.every((v, i) => v === declarators[i]))) {
      return node;
    }
    return new Shift.VariableDeclaration({kind: node.kind, declarators});
  }

  reduceVariableDeclarationStatement(node, {declaration}) {
    if (node.declaration === declaration) {
      return node;
    }
    return new Shift.VariableDeclarationStatement({declaration});
  }

  reduceVariableDeclarator(node, {binding, init}) {
    if (node.binding === binding && node.init === init) {
      return node;
    }
    return new Shift.VariableDeclarator({binding, init});
  }

  reduceWhileStatement(node, {test, body}) {
    if (node.test === test && node.body === body) {
      return node;
    }
    return new Shift.WhileStatement({test, body});
  }

  reduceWithStatement(node, {object, body}) {
    if (node.object === object && node.body === body) {
      return node;
    }
    return new Shift.WithStatement({object, body});
  }

  reduceYieldExpression(node, {expression}) {
    if (node.expression === expression) {
      return node;
    }
    return new Shift.YieldExpression({expression});
  }

  reduceYieldGeneratorExpression(node, {expression}) {
    if (node.expression === expression) {
      return node;
    }
    return new Shift.YieldGeneratorExpression({expression});
  }
}
