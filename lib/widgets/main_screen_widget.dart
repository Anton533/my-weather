import 'package:flutter/material.dart';
import 'package:my_weather/domain/api_client/api_client.dart';
import 'package:my_weather/domain/entity/current_response.dart';

class MainScreenWidget extends StatefulWidget {
  const MainScreenWidget({super.key});

  @override
  State<MainScreenWidget> createState() => _MainScreenWidgetState();
}

class _MainScreenWidgetState extends State<MainScreenWidget> {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: const Text('My Weather'),
      ),
      body: Center(
        child: Column(
          children: [
            const Padding(
              padding: EdgeInsets.all(10.0),
              child: Text(
                'Select your location:',
                style: TextStyle(fontSize: 20),
              ),
            ),
            const Padding(
              padding: EdgeInsets.all(10.0),
              child: TextField(
                decoration: InputDecoration(
                  border: OutlineInputBorder(),
                ),
              ),
            ),
            ElevatedButton(
              onPressed: () =>
                  Navigator.of(context).pushNamed('/current_weather'),
              child: const Text(
                'Search',
                // style: TextStyle(
                //   color: Colors.black.withOpacity(0.05),
                // ),
              ),
            ),
            const SizedBox(height: 50),
            ElevatedButton(
              onPressed: () => loadWeather('48.4655696,34.9810197'),
              child: const Text('Detect location automatically'),
            ),
          ],
        ),
      ),
    );
  }

  Future<CurrentWeatherResponse> loadWeather(String q) async {
    final apiClient = ApiClient();

    final currentWeather = await apiClient.getCurrentWeather(q);
    return currentWeather;
  }
}
