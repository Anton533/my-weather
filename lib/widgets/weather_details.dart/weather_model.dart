import 'package:flutter/material.dart';
import 'package:my_weather/domain/entity/current_response.dart';
import 'package:my_weather/domain/entity/current_weather.dart';

import '../../domain/api_client/api_client.dart';

class WeatherModel extends ChangeNotifier {
  final _apiClient = ApiClient();
  final String q = '48.4655696,34.9810197';

  CurrentWeather? _currentWeather;
  CurrentWeather? get currentWeather => _currentWeather;

  WeatherModel() {
    _init();
  }

  Future _init() async {
    final response = await _apiClient.getCurrentWeather(q);
    _currentWeather = CurrentWeather(
      lastUpdated: response.current.lastUpdated,
      tempC: response.current.tempC,
      windKph: response.current.windKph,
      feelslikeC: response.current.feelslikeC,
    );
    notifyListeners();
  }

// q = '48.4655696,34.9810197'
  Future<CurrentWeatherResponse> loadWeather(String q) async {
    final currentWeather = await _apiClient.getCurrentWeather(q);
    return currentWeather;
  }
}


// _currentWeather = CurrentWeather(
//       lastUpdated: "2022-12-18 16:15",
//       tempC: -0.9,
//       windKph: 25.2,
//       feelslikeC: -7.1,
//     );
