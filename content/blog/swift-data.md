---
title: Swift Data
description: Fundamentals of Swift Data
publishedAt: 2023-04-12 18:48:00
toc: true
---

# Swift Data

## Data Model

---

```swift
import Foundation
import SwiftData

@Model
class Destination {
    var name: String
    var details: String
    var date: Date
    var priority: Int
    init(name: String = "", details: String = "", date: Date = .now, priority: Int = 2)  {
        self.name = name
        self.details = details
        self.date = date
        self.priority = priority
    }
}
```

## Model Container

---

```swift
import SwiftUI
import SwiftData

@main
struct iTourApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
        .modelContainer(for: Destination.self)
    }
}
```

## Reference to the Context

---

```swift
@Environment(\.modelContext) var modelContext

```

## Add Data to the Persistent Store and Retrieve the Data

---

```swift
    func addSamples() {
        let rome = Destination(name: "Rome")
        let florence = Destination(name: "Florence")
        let naples = Destination(name: "Naples")
        modelContext.insert(rome)
        modelContext.insert(florence)
        modelContext.insert(naples)
    }
```

## Update and Delete the Data

---

```swift
    func deleteDestinations(_ indexSet: IndexSet) {
        for index in indexSet {
            let destination = destinations[index]
            modelContext.delete(destination)
        }
    }
```

## Queries

---

## Sort Descriptors

---

## Predicates

---

## Relationships

---
