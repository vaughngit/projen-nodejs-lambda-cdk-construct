# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConstructWithProperties <a name="ConstructWithProperties" id="projen-nodejs-lambda-cdk-construct.ConstructWithProperties"></a>

A simple CDK construct illustrating the differences in declaring construct properties with interfaces.

#### Initializers <a name="Initializers" id="projen-nodejs-lambda-cdk-construct.ConstructWithProperties.Initializer"></a>

```typescript
import { ConstructWithProperties } from 'projen-nodejs-lambda-cdk-construct'

new ConstructWithProperties(parent: Construct, name: string, props: StructProperties, props2: IBehaviorProperties)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.ConstructWithProperties.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.ConstructWithProperties.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.ConstructWithProperties.Initializer.parameter.props">props</a></code> | <code><a href="#projen-nodejs-lambda-cdk-construct.StructProperties">StructProperties</a></code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.ConstructWithProperties.Initializer.parameter.props2">props2</a></code> | <code><a href="#projen-nodejs-lambda-cdk-construct.IBehaviorProperties">IBehaviorProperties</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="projen-nodejs-lambda-cdk-construct.ConstructWithProperties.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="projen-nodejs-lambda-cdk-construct.ConstructWithProperties.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="projen-nodejs-lambda-cdk-construct.ConstructWithProperties.Initializer.parameter.props"></a>

- *Type:* <a href="#projen-nodejs-lambda-cdk-construct.StructProperties">StructProperties</a>

---

##### `props2`<sup>Required</sup> <a name="props2" id="projen-nodejs-lambda-cdk-construct.ConstructWithProperties.Initializer.parameter.props2"></a>

- *Type:* <a href="#projen-nodejs-lambda-cdk-construct.IBehaviorProperties">IBehaviorProperties</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.ConstructWithProperties.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="projen-nodejs-lambda-cdk-construct.ConstructWithProperties.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.ConstructWithProperties.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="projen-nodejs-lambda-cdk-construct.ConstructWithProperties.isConstruct"></a>

```typescript
import { ConstructWithProperties } from 'projen-nodejs-lambda-cdk-construct'

ConstructWithProperties.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="projen-nodejs-lambda-cdk-construct.ConstructWithProperties.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.ConstructWithProperties.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-nodejs-lambda-cdk-construct.ConstructWithProperties.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### InlineLambdaConstruct <a name="InlineLambdaConstruct" id="projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct"></a>

A CDK construct to create Lambda functions.

#### Initializers <a name="Initializers" id="projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct.Initializer"></a>

```typescript
import { InlineLambdaConstruct } from 'projen-nodejs-lambda-cdk-construct'

new InlineLambdaConstruct(parent: Construct, name: string, props: IinlineLambdaProperties)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#projen-nodejs-lambda-cdk-construct.IinlineLambdaProperties">IinlineLambdaProperties</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#projen-nodejs-lambda-cdk-construct.IinlineLambdaProperties">IinlineLambdaProperties</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct.isConstruct"></a>

```typescript
import { InlineLambdaConstruct } from 'projen-nodejs-lambda-cdk-construct'

InlineLambdaConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-nodejs-lambda-cdk-construct.InlineLambdaConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### LambdaConstruct <a name="LambdaConstruct" id="projen-nodejs-lambda-cdk-construct.LambdaConstruct"></a>

A CDK construct to create Lambda functions.

#### Initializers <a name="Initializers" id="projen-nodejs-lambda-cdk-construct.LambdaConstruct.Initializer"></a>

```typescript
import { LambdaConstruct } from 'projen-nodejs-lambda-cdk-construct'

new LambdaConstruct(parent: Construct, name: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.LambdaConstruct.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#projen-nodejs-lambda-cdk-construct.LambdaConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="projen-nodejs-lambda-cdk-construct.LambdaConstruct.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="projen-nodejs-lambda-cdk-construct.LambdaConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.LambdaConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="projen-nodejs-lambda-cdk-construct.LambdaConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.LambdaConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="projen-nodejs-lambda-cdk-construct.LambdaConstruct.isConstruct"></a>

```typescript
import { LambdaConstruct } from 'projen-nodejs-lambda-cdk-construct'

LambdaConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="projen-nodejs-lambda-cdk-construct.LambdaConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.LambdaConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="projen-nodejs-lambda-cdk-construct.LambdaConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


## Structs <a name="Structs" id="Structs"></a>

### IinlineLambdaProperties <a name="IinlineLambdaProperties" id="projen-nodejs-lambda-cdk-construct.IinlineLambdaProperties"></a>

This is a IinlineLambdaPropeties identified by `I` in its name.

It will be translated to a "regular" interface which needs to be implemented.

> [https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces](https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces)

#### Initializer <a name="Initializer" id="projen-nodejs-lambda-cdk-construct.IinlineLambdaProperties.Initializer"></a>

```typescript
import { IinlineLambdaProperties } from 'projen-nodejs-lambda-cdk-construct'

const iinlineLambdaProperties: IinlineLambdaProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.IinlineLambdaProperties.property.inlineCode">inlineCode</a></code> | <code>string</code> | *No description.* |

---

##### `inlineCode`<sup>Required</sup> <a name="inlineCode" id="projen-nodejs-lambda-cdk-construct.IinlineLambdaProperties.property.inlineCode"></a>

```typescript
public readonly inlineCode: string;
```

- *Type:* string

---

### StructProperties <a name="StructProperties" id="projen-nodejs-lambda-cdk-construct.StructProperties"></a>

This interface is translated into a _struct_ containing data.

E.g. if translated to Java, an interface `StructProperties` is created containing a builder subclass to create an instance of the interface.

> [https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces](https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces)

#### Initializer <a name="Initializer" id="projen-nodejs-lambda-cdk-construct.StructProperties.Initializer"></a>

```typescript
import { StructProperties } from 'projen-nodejs-lambda-cdk-construct'

const structProperties: StructProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.StructProperties.property.myProp">myProp</a></code> | <code>string</code> | *No description.* |

---

##### `myProp`<sup>Required</sup> <a name="myProp" id="projen-nodejs-lambda-cdk-construct.StructProperties.property.myProp"></a>

```typescript
public readonly myProp: string;
```

- *Type:* string

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IBehaviorProperties <a name="IBehaviorProperties" id="projen-nodejs-lambda-cdk-construct.IBehaviorProperties"></a>

- *Implemented By:* <a href="#projen-nodejs-lambda-cdk-construct.IBehaviorProperties">IBehaviorProperties</a>

This is a _behavioral interface_ identified by `I` in its name.

It will be translated to a "regular" interface which needs to be implemented.
You can also use methods here, e.g. `doSth(): void;`.

> [https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces](https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces)


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#projen-nodejs-lambda-cdk-construct.IBehaviorProperties.property.otherProp">otherProp</a></code> | <code>string</code> | *No description.* |

---

##### `otherProp`<sup>Required</sup> <a name="otherProp" id="projen-nodejs-lambda-cdk-construct.IBehaviorProperties.property.otherProp"></a>

```typescript
public readonly otherProp: string;
```

- *Type:* string

---

