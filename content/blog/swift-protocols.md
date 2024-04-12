---
title: Swift Protocols
description: How to utilize Swift Protocols
publishedAt: 2024-01-12 18:48:00
---

# Swift Protocols

## Equatable

- It’s a good idea for all your custom model types to conform.
- With `Equatable` conformance, you can use the equal-to operator (`==`) or the not-equal-to operator (`!=`) with any two instances
- To make a class conform to the `Equatable` protocol, declare conformance in an extension and implement the static `==` operator method. Compare each significant property for equality in your `==` method’s implementation:

```swift
extension Player: Equatable {
 static func ==(lhs: Player, rhs: Player) -> Bool {
  return lhs.name == rhs.name && lhs.position == rhs.position } }
```

## Hashable

- It’s a good idea for all your custom model types to conform.
- To conform to the `Hashable` protocol, declare conformance in another extension and implement the `hash(into:)` method. In the `hash(into:)` method, call the `combine(_:)` method on the provided hasher with each significant property:

```swift
extension Player: Hashable {
 func hash(into hasher: inout Hasher) {
  hasher.combine(name)
  hasher.combine(position)
 }
}
```

\*A type is eligible for automatic conformance to `Equatable` and `Hashable` when it’s a structure or an enumeration that meets these criteria:

- For a structure, *all* its stored properties must conform to `Equatable` and `Hashable`.

- For an enumeration, *all* its associated values must conform to `Equatable` and `Hashable`. (Enumerations without associated values have `Equatable` and `Hashable` conformance even without declaring adoption.)\*
- Always use the same properties in both your `==` and `hash(into:)` methods. Using different groups of properties in the two methods can lead to unexpected behavior or performance when using your custom type in sets and dictionaries.\*

## Identifiable

## Comparable
