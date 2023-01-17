# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ConstructWithProperties <a name="ConstructWithProperties" id="vt-lambda-construct.ConstructWithProperties"></a>

A simple CDK construct illustrating the differences in declaring construct properties with interfaces.

#### Initializers <a name="Initializers" id="vt-lambda-construct.ConstructWithProperties.Initializer"></a>

```typescript
import { ConstructWithProperties } from 'vt-lambda-construct'

new ConstructWithProperties(parent: Construct, name: string, props: StructProperties, props2: IBehaviorProperties)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-lambda-construct.ConstructWithProperties.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#vt-lambda-construct.ConstructWithProperties.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#vt-lambda-construct.ConstructWithProperties.Initializer.parameter.props">props</a></code> | <code><a href="#vt-lambda-construct.StructProperties">StructProperties</a></code> | *No description.* |
| <code><a href="#vt-lambda-construct.ConstructWithProperties.Initializer.parameter.props2">props2</a></code> | <code><a href="#vt-lambda-construct.IBehaviorProperties">IBehaviorProperties</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="vt-lambda-construct.ConstructWithProperties.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="vt-lambda-construct.ConstructWithProperties.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="vt-lambda-construct.ConstructWithProperties.Initializer.parameter.props"></a>

- *Type:* <a href="#vt-lambda-construct.StructProperties">StructProperties</a>

---

##### `props2`<sup>Required</sup> <a name="props2" id="vt-lambda-construct.ConstructWithProperties.Initializer.parameter.props2"></a>

- *Type:* <a href="#vt-lambda-construct.IBehaviorProperties">IBehaviorProperties</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#vt-lambda-construct.ConstructWithProperties.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="vt-lambda-construct.ConstructWithProperties.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#vt-lambda-construct.ConstructWithProperties.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="vt-lambda-construct.ConstructWithProperties.isConstruct"></a>

```typescript
import { ConstructWithProperties } from 'vt-lambda-construct'

ConstructWithProperties.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="vt-lambda-construct.ConstructWithProperties.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-lambda-construct.ConstructWithProperties.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="vt-lambda-construct.ConstructWithProperties.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### InlineLambdaConstruct <a name="InlineLambdaConstruct" id="vt-lambda-construct.InlineLambdaConstruct"></a>

A CDK construct to create Lambda functions.

#### Initializers <a name="Initializers" id="vt-lambda-construct.InlineLambdaConstruct.Initializer"></a>

```typescript
import { InlineLambdaConstruct } from 'vt-lambda-construct'

new InlineLambdaConstruct(parent: Construct, name: string, props: IinlineLambdaProperties)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-lambda-construct.InlineLambdaConstruct.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#vt-lambda-construct.InlineLambdaConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#vt-lambda-construct.InlineLambdaConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#vt-lambda-construct.IinlineLambdaProperties">IinlineLambdaProperties</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="vt-lambda-construct.InlineLambdaConstruct.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="vt-lambda-construct.InlineLambdaConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="vt-lambda-construct.InlineLambdaConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#vt-lambda-construct.IinlineLambdaProperties">IinlineLambdaProperties</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#vt-lambda-construct.InlineLambdaConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="vt-lambda-construct.InlineLambdaConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#vt-lambda-construct.InlineLambdaConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="vt-lambda-construct.InlineLambdaConstruct.isConstruct"></a>

```typescript
import { InlineLambdaConstruct } from 'vt-lambda-construct'

InlineLambdaConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="vt-lambda-construct.InlineLambdaConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-lambda-construct.InlineLambdaConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="vt-lambda-construct.InlineLambdaConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### LambdaConstruct <a name="LambdaConstruct" id="vt-lambda-construct.LambdaConstruct"></a>

A CDK construct to create Lambda functions.

#### Initializers <a name="Initializers" id="vt-lambda-construct.LambdaConstruct.Initializer"></a>

```typescript
import { LambdaConstruct } from 'vt-lambda-construct'

new LambdaConstruct(parent: Construct, name: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-lambda-construct.LambdaConstruct.Initializer.parameter.parent">parent</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#vt-lambda-construct.LambdaConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="vt-lambda-construct.LambdaConstruct.Initializer.parameter.parent"></a>

- *Type:* constructs.Construct

---

##### `name`<sup>Required</sup> <a name="name" id="vt-lambda-construct.LambdaConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#vt-lambda-construct.LambdaConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="vt-lambda-construct.LambdaConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#vt-lambda-construct.LambdaConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="vt-lambda-construct.LambdaConstruct.isConstruct"></a>

```typescript
import { LambdaConstruct } from 'vt-lambda-construct'

LambdaConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="vt-lambda-construct.LambdaConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-lambda-construct.LambdaConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="vt-lambda-construct.LambdaConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---


### PowerToolsLambdaConstruct <a name="PowerToolsLambdaConstruct" id="vt-lambda-construct.PowerToolsLambdaConstruct"></a>

#### Initializers <a name="Initializers" id="vt-lambda-construct.PowerToolsLambdaConstruct.Initializer"></a>

```typescript
import { PowerToolsLambdaConstruct } from 'vt-lambda-construct'

new PowerToolsLambdaConstruct(parent: Stack, name: string, props: IPowerToolsLambdaProperties)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-lambda-construct.PowerToolsLambdaConstruct.Initializer.parameter.parent">parent</a></code> | <code>aws-cdk-lib.Stack</code> | *No description.* |
| <code><a href="#vt-lambda-construct.PowerToolsLambdaConstruct.Initializer.parameter.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#vt-lambda-construct.PowerToolsLambdaConstruct.Initializer.parameter.props">props</a></code> | <code><a href="#vt-lambda-construct.IPowerToolsLambdaProperties">IPowerToolsLambdaProperties</a></code> | *No description.* |

---

##### `parent`<sup>Required</sup> <a name="parent" id="vt-lambda-construct.PowerToolsLambdaConstruct.Initializer.parameter.parent"></a>

- *Type:* aws-cdk-lib.Stack

---

##### `name`<sup>Required</sup> <a name="name" id="vt-lambda-construct.PowerToolsLambdaConstruct.Initializer.parameter.name"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="vt-lambda-construct.PowerToolsLambdaConstruct.Initializer.parameter.props"></a>

- *Type:* <a href="#vt-lambda-construct.IPowerToolsLambdaProperties">IPowerToolsLambdaProperties</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#vt-lambda-construct.PowerToolsLambdaConstruct.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="vt-lambda-construct.PowerToolsLambdaConstruct.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#vt-lambda-construct.PowerToolsLambdaConstruct.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="vt-lambda-construct.PowerToolsLambdaConstruct.isConstruct"></a>

```typescript
import { PowerToolsLambdaConstruct } from 'vt-lambda-construct'

PowerToolsLambdaConstruct.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="vt-lambda-construct.PowerToolsLambdaConstruct.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-lambda-construct.PowerToolsLambdaConstruct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#vt-lambda-construct.PowerToolsLambdaConstruct.property.function">function</a></code> | <code>aws-cdk-lib.aws_lambda.IFunction</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="vt-lambda-construct.PowerToolsLambdaConstruct.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `function`<sup>Required</sup> <a name="function" id="vt-lambda-construct.PowerToolsLambdaConstruct.property.function"></a>

```typescript
public readonly function: IFunction;
```

- *Type:* aws-cdk-lib.aws_lambda.IFunction

---


## Structs <a name="Structs" id="Structs"></a>

### IinlineLambdaProperties <a name="IinlineLambdaProperties" id="vt-lambda-construct.IinlineLambdaProperties"></a>

This is a IinlineLambdaPropeties identified by `I` in its name.

It will be translated to a "regular" interface which needs to be implemented.

> [https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces](https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces)

#### Initializer <a name="Initializer" id="vt-lambda-construct.IinlineLambdaProperties.Initializer"></a>

```typescript
import { IinlineLambdaProperties } from 'vt-lambda-construct'

const iinlineLambdaProperties: IinlineLambdaProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-lambda-construct.IinlineLambdaProperties.property.inlineCode">inlineCode</a></code> | <code>string</code> | *No description.* |

---

##### `inlineCode`<sup>Required</sup> <a name="inlineCode" id="vt-lambda-construct.IinlineLambdaProperties.property.inlineCode"></a>

```typescript
public readonly inlineCode: string;
```

- *Type:* string

---

### StructProperties <a name="StructProperties" id="vt-lambda-construct.StructProperties"></a>

This interface is translated into a _struct_ containing data.

E.g. if translated to Java, an interface `StructProperties` is created containing a builder subclass to create an instance of the interface.

> [https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces](https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces)

#### Initializer <a name="Initializer" id="vt-lambda-construct.StructProperties.Initializer"></a>

```typescript
import { StructProperties } from 'vt-lambda-construct'

const structProperties: StructProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-lambda-construct.StructProperties.property.myProp">myProp</a></code> | <code>string</code> | *No description.* |

---

##### `myProp`<sup>Required</sup> <a name="myProp" id="vt-lambda-construct.StructProperties.property.myProp"></a>

```typescript
public readonly myProp: string;
```

- *Type:* string

---


## Protocols <a name="Protocols" id="Protocols"></a>

### IBehaviorProperties <a name="IBehaviorProperties" id="vt-lambda-construct.IBehaviorProperties"></a>

- *Implemented By:* <a href="#vt-lambda-construct.IBehaviorProperties">IBehaviorProperties</a>

This is a _behavioral interface_ identified by `I` in its name.

It will be translated to a "regular" interface which needs to be implemented.
You can also use methods here, e.g. `doSth(): void;`.

> [https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces](https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces)


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-lambda-construct.IBehaviorProperties.property.otherProp">otherProp</a></code> | <code>string</code> | *No description.* |

---

##### `otherProp`<sup>Required</sup> <a name="otherProp" id="vt-lambda-construct.IBehaviorProperties.property.otherProp"></a>

```typescript
public readonly otherProp: string;
```

- *Type:* string

---

### IPowerToolsLambdaProperties <a name="IPowerToolsLambdaProperties" id="vt-lambda-construct.IPowerToolsLambdaProperties"></a>

- *Implemented By:* <a href="#vt-lambda-construct.IPowerToolsLambdaProperties">IPowerToolsLambdaProperties</a>

This is a IinlineLambdaPropeties identified by `I` in its name.

It will be translated to a "regular" interface which needs to be implemented.

> [https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces](https://aws.github.io/jsii/user-guides/lib-author/typescript-restrictions/#interfaces)


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#vt-lambda-construct.IPowerToolsLambdaProperties.property.sourceCodedirPath">sourceCodedirPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#vt-lambda-construct.IPowerToolsLambdaProperties.property.description">description</a></code> | <code>string</code> | Function description. |
| <code><a href="#vt-lambda-construct.IPowerToolsLambdaProperties.property.environment">environment</a></code> | <code>{[ key: string ]: string}</code> | Env variables. |
| <code><a href="#vt-lambda-construct.IPowerToolsLambdaProperties.property.functionName">functionName</a></code> | <code>string</code> | Function Name. |
| <code><a href="#vt-lambda-construct.IPowerToolsLambdaProperties.property.layers">layers</a></code> | <code>aws-cdk-lib.aws_lambda.LayerVersion[]</code> | Add other layers if required. |
| <code><a href="#vt-lambda-construct.IPowerToolsLambdaProperties.property.logEvent">logEvent</a></code> | <code>boolean</code> | Log the event. |
| <code><a href="#vt-lambda-construct.IPowerToolsLambdaProperties.property.logLevel">logLevel</a></code> | <code>string</code> | Log level. |
| <code><a href="#vt-lambda-construct.IPowerToolsLambdaProperties.property.logRetention">logRetention</a></code> | <code>string</code> | Function log retention in days. |
| <code><a href="#vt-lambda-construct.IPowerToolsLambdaProperties.property.memorySize">memorySize</a></code> | <code>number</code> | Function memory size. |
| <code><a href="#vt-lambda-construct.IPowerToolsLambdaProperties.property.metricsNamespace">metricsNamespace</a></code> | <code>string</code> | Metrics Namespace. |
| <code><a href="#vt-lambda-construct.IPowerToolsLambdaProperties.property.solutionName">solutionName</a></code> | <code>string</code> | App or Solution Name. |
| <code><a href="#vt-lambda-construct.IPowerToolsLambdaProperties.property.timeout">timeout</a></code> | <code>number</code> | Function timeout in seconds. |
| <code><a href="#vt-lambda-construct.IPowerToolsLambdaProperties.property.toolsLayer">toolsLayer</a></code> | <code>aws-cdk-lib.aws_lambda.LayerVersion</code> | Layer containing PowerTools modules. |

---

##### `sourceCodedirPath`<sup>Required</sup> <a name="sourceCodedirPath" id="vt-lambda-construct.IPowerToolsLambdaProperties.property.sourceCodedirPath"></a>

```typescript
public readonly sourceCodedirPath: string;
```

- *Type:* string

---

##### `description`<sup>Optional</sup> <a name="description" id="vt-lambda-construct.IPowerToolsLambdaProperties.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Function description.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="vt-lambda-construct.IPowerToolsLambdaProperties.property.environment"></a>

```typescript
public readonly environment: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Env variables.

PowerTools and env name are included by default.

---

##### `functionName`<sup>Optional</sup> <a name="functionName" id="vt-lambda-construct.IPowerToolsLambdaProperties.property.functionName"></a>

```typescript
public readonly functionName: string;
```

- *Type:* string
- *Default:* : 'DemoFunction

Function Name.

---

##### `layers`<sup>Optional</sup> <a name="layers" id="vt-lambda-construct.IPowerToolsLambdaProperties.property.layers"></a>

```typescript
public readonly layers: LayerVersion[];
```

- *Type:* aws-cdk-lib.aws_lambda.LayerVersion[]

Add other layers if required.

---

##### `logEvent`<sup>Optional</sup> <a name="logEvent" id="vt-lambda-construct.IPowerToolsLambdaProperties.property.logEvent"></a>

```typescript
public readonly logEvent: boolean;
```

- *Type:* boolean
- *Default:* false

Log the event.

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="vt-lambda-construct.IPowerToolsLambdaProperties.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string
- *Default:* 'INFO'

Log level.

---

##### `logRetention`<sup>Optional</sup> <a name="logRetention" id="vt-lambda-construct.IPowerToolsLambdaProperties.property.logRetention"></a>

```typescript
public readonly logRetention: string;
```

- *Type:* string
- *Default:* 30

Function log retention in days.

---

##### `memorySize`<sup>Optional</sup> <a name="memorySize" id="vt-lambda-construct.IPowerToolsLambdaProperties.property.memorySize"></a>

```typescript
public readonly memorySize: number;
```

- *Type:* number
- *Default:* 128

Function memory size.

---

##### `metricsNamespace`<sup>Optional</sup> <a name="metricsNamespace" id="vt-lambda-construct.IPowerToolsLambdaProperties.property.metricsNamespace"></a>

```typescript
public readonly metricsNamespace: string;
```

- *Type:* string
- *Default:* : 'DemoNamespace

Metrics Namespace.

---

##### `solutionName`<sup>Optional</sup> <a name="solutionName" id="vt-lambda-construct.IPowerToolsLambdaProperties.property.solutionName"></a>

```typescript
public readonly solutionName: string;
```

- *Type:* string
- *Default:* : 'DemoSolution

App or Solution Name.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="vt-lambda-construct.IPowerToolsLambdaProperties.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number
- *Default:* 10

Function timeout in seconds.

---

##### `toolsLayer`<sup>Optional</sup> <a name="toolsLayer" id="vt-lambda-construct.IPowerToolsLambdaProperties.property.toolsLayer"></a>

```typescript
public readonly toolsLayer: LayerVersion;
```

- *Type:* aws-cdk-lib.aws_lambda.LayerVersion

Layer containing PowerTools modules.

If not included a layer will be created.

---

