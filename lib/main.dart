import 'package:flutter/material.dart';
import 'package:my_weather/provider.dart';
import 'package:my_weather/widgets/main_screen_widget.dart';
import 'package:my_weather/widgets/weather_details.dart/weather_details_widget.dart';

import 'widgets/weather_details.dart/weather_model.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My Weather',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      // home: const MainScreenWidget(),
      routes: {
        '/': (context) => const MainScreenWidget(),
        '/current_weather': (context) => NotifierProvider(
              create: () => WeatherModel(),
              child: const WeatherDetailsWidget(),
            ),
      },
      initialRoute: '/current_weather',
    );
  }
}


// class MyHomePage extends StatefulWidget {
//   const MyHomePage({super.key, required this.title});

//   final String title;

//   @override
//   State<MyHomePage> createState() => _MyHomePageState();
// }

// class _MyHomePageState extends State<MyHomePage> {
//   int _counter = 0;

//   void _incrementCounter() {
//     setState(() {
//       _counter++;
//     });
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text(widget.title),
//       ),
//       body: Center(
//         child: Column(
//           mainAxisAlignment: MainAxisAlignment.center,
//           children: <Widget>[
//             const Text(
//               'You have pushed the button this many times:',
//             ),
//             Text(
//               '$_counter',
//               style: Theme.of(context).textTheme.headline4,
//             ),
//           ],
//         ),
//       ),
//       floatingActionButton: FloatingActionButton(
//         onPressed: _incrementCounter,
//         tooltip: 'Increment',
//         child: const Icon(Icons.add),
//       ),
//     );
//   }
// }
